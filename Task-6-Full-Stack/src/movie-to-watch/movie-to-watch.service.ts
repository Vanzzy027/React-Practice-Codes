import { getDbPool } from "../db/config.js"

interface MovieToWatch {
    movie_id: number;
    movie_name: string;
    release_date?: string;
    is_watched?: boolean;
    created_at: string
}


//Get all Movie To Watch Service
export const getAllMovieToWatchsService = async (): Promise<MovieToWatch[] > => {
    const db = getDbPool()
    const results = await db.request().query('SELECT * FROM Movies')
    return results.recordset.length > 0 ? results.recordset : []
}


//get movie by id
export const getMovieByIdService = async (movie_id: number): Promise<MovieToWatch | null> => {
    const db = getDbPool() //get existing connection
    const result = await db.request()
        .input('movie_id', movie_id)
        .query('SELECT * FROM Movies WHERE movie_id =@movie_id')

    return result.recordset[0] || null
}

//Create new movie
export const createMovieService = async (movie_name: string, release_date: string): Promise<string> => {
    const db = getDbPool()
    const result = await db.request()
        .input('movie_name', movie_name)
        .input('release_date', release_date)
        .query('INSERT INTO Movies (movie_name, release_date) VALUES(@movie_name, @release_date)')
    return result.rowsAffected[0] === 1 ? "Movie Created Successfully" : "Failed create movie try again"
}


//Update existing movie
export const updateMovieService = async (movie_id: number, movie_name: string, release_date: string, is_watched: boolean): Promise<string> => {
    const db = getDbPool()
    const result = await db.request()
        .input('movie_id', movie_id)
        .input('movie_name', movie_name)
        .input('release_date', release_date)
        .input('is_watched', is_watched)
        .query('UPDATE Movies SET movie_name = COALESCE(@movie_name, movie_name), release_date = COALESCE(@release_date, release_date), is_watched = COALESCE(@is_watched, is_watched) WHERE movie_id = @movie_id')
    return result.rowsAffected[0] === 1 ? "Movie Updated Successfully" : "Failed to update movie try again"
}



//delete by id
export const deleteMovieByIdService = async (movie_id:number):Promise<string> => {
    const db = getDbPool();
    const result = await db.request()
        .input("movie_id", movie_id)
        .query('DELETE FROM Movies WHERE movie_id = @movie_id')
    return result.rowsAffected[0] === 1 ? "Movie deleted successfully" : "Failed to delete movie"
}