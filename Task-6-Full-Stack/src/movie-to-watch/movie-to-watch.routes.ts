import {Hono} from 'hono'
import * as movieToWatchController from './movie-to-watch.controller.js'

const movieRoutes = new Hono()



//Get /movies - Get all Movies
//protected by admin
movieRoutes.get('movies', movieToWatchController.getAllMovies)

//Get on Movie /movies/:id - Get a specific movie using Id
movieRoutes.get('movies/:movie_id',movieToWatchController.getMovieById)

//POST /movies - Create a new Movie
movieRoutes.post('movies', movieToWatchController.createMovie)

//PUT /movies/:id - Update a specific Movie
movieRoutes.put('movies/:movie_id', movieToWatchController.updateMovie)

//DELETE /movies/:id - Delete a specific Movie
movieRoutes.delete('movies/:movie_id', movieToWatchController.deletedMovie)

export default movieRoutes;


