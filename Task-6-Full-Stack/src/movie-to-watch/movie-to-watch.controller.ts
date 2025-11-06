import type { Context } from "hono"
import * as movieToWatchService from "./movie-to-watch.service.js"
// import { sendNotificationEmail } from "../mailer/mailer.ts"


//get all movie
export const getAllMovies = async (c: Context) => {

  try {
    const movies = await movieToWatchService.getAllMovieToWatchsService()
    // console.log("Movies data:", results)
    if (movies.length === 0) {
      return c.json(movies)
    }
    return c.json(movies)

  } catch (error) {
    console.log("Failed to fetch movies:", error)
    return c.json({ error: 'Failed to fetch movies' }, 500);
  }
}

//Get on Movie /movies/:id - Get a specific movie using Id
export const getMovieById = async (c: Context) => {
  const movie_id = parseInt(c.req.param("movie_id"))

  try {
    const movie = await movieToWatchService.getMovieByIdService(movie_id)
    if (movie === null ) {
      return c.json({ error: "No Movie found" }, 404)
    }
    return c.json(movie)

  } catch (error) {
    console.log('Error fetching movie:', error)
    return c.json({ error: "Error fetching movie" }, 500)
  }
}

//POST /movies - Create a new Movie
export const createMovie = async (c: Context) => {

  const { movie_name, release_date } = await c.req.json()
  try {
    const newMovie = await movieToWatchService.createMovieService(movie_name, release_date)
    if (newMovie === "Failed create movie try again") {
      return c.json({ error: 'Movie not created try again later' }, 404)
    }
    // const emailRes = sendNotificationEmail()
    return c.json({ message: newMovie}, 201)

  } catch (error) {
    console.log("Error creating movie:", error)
    return c.json({ error: "Failed to create movie" }, 500)
  }
}

//PUT /movies/:id - Update a specific Movie
export const updateMovie = async (c: Context) => {
  const movie_id = parseInt(c.req.param("movie_id"))
  const { movie_name, release_date, is_watched } = await c.req.json()
  try {

    //check movie exist
    const ifMovieExist = await movieToWatchService.getMovieByIdService(movie_id)
    if (ifMovieExist === null ) {
      return c.json({ error: "Movie not found" }, 404)
    }

    // update movie
    const updatedMovie = await movieToWatchService.updateMovieService(movie_id, movie_name, release_date, is_watched)
    if(updatedMovie === "Failed to update movie try again" ){
      return c.json({error:"Failed to updated"},404)
    }

    return c.json({message:updatedMovie},200)

  } catch (error) {
    console.error('Error updating movie:', error);
    return c.json({ error: 'Failed to update movie' }, 500);
  }
}

//DELETE /movies/:id - Delete a specific Movie
export const deletedMovie = async(c: Context) => {
  const movie_id = parseInt(c.req.param("movie_id"))


  try {
    //check movie exist
    const ifMovieExist = await movieToWatchService.getMovieByIdService(movie_id)
    if (ifMovieExist === null) {
      return c.json({ error: "Movie not found" }, 404)
    }

    //delete movie
    const deletedMovie = await movieToWatchService.deleteMovieByIdService(movie_id)

    if (deletedMovie === "Failed to delete" ){
      return c.json({error:deletedMovie},404)
    }

    return c.json({message:"Movie Deleted successfully 🎊"},200)

  } catch (error) {
    console.error('Error deleting movie:', error);
        return c.json({ error: 'Failed to delete movie' }, 500);
  }  
} 