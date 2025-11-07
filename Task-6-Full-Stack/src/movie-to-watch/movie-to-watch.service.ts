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

// movie-to-watch.service.js

interface MovieToWatch {
    movie_id: number;
    movie_name: string;
    // Release date is a string in the DB but is often treated as optional in update requests
    release_date?: string; 
    is_watched?: boolean;
    created_at: string
}


// Update existing movie - The controller ensures all 4 arguments are provided and typed.
export const updateMovieService = async (
    movie_id: number, 
    movie_name: string, 
    release_date: string, 
    is_watched: boolean
): Promise<string> => {
    const db = getDbPool()
    
    try {
        const result = await db.request()
            .input('movie_id', movie_id)
            .input('movie_name', movie_name)
            .input('release_date', release_date)
            // Ensure boolean is passed as BIT (or corresponding SQL type)
            .input('is_watched', is_watched) 
            // Simple update query
            .query('UPDATE Movies SET movie_name = @movie_name, release_date = @release_date, is_watched = @is_watched WHERE movie_id = @movie_id')
            
        return result.rowsAffected[0] === 1 ? "Movie Updated Successfully" : "Failed to update movie try again"
    } catch (error) {
        console.error("SQL Error during movie update:", error);
        // Throw an error to be caught by the controller's try/catch block
        throw new Error("Database update failed"); 
    }
}



// // Update existing movie - Explicitly typing all parameters
// export const updateMovieService = async (
//     movie_id: number, 
//     movie_name: string, 
//     release_date: string, // Expecting string for SQL
//     is_watched: boolean
// ): Promise<string> => { // Added return type
//     const db = getDbPool()
    
//     // Using your original COALESCE approach which simplifies the controller logic, 
//     // but the controller must ensure all fields are passed, even if with their original values.
//     const result = await db.request()
//         .input('movie_id', movie_id)
//         .input('movie_name', movie_name)
//         .input('release_date', release_date)
//         .input('is_watched', is_watched)
//         // Since the controller is now responsible for providing all current/new values, 
//         // the query can be a straight update without COALESCE for simplicity and clarity.
//         .query('UPDATE Movies SET movie_name = @movie_name, release_date = @release_date, is_watched = @is_watched WHERE movie_id = @movie_id')
        
//     return result.rowsAffected[0] === 1 ? "Movie Updated Successfully" : "Failed to update movie try again"
// }




// ... (deleteMovieByIdService remains the same)
//Update existing movie

// // Update existing movie - Made parameters optional for partial updates
// export const updateMovieService = async (movie_id, movie_name, release_date, is_watched) => {
//     const db = getDbPool()

//     // Dynamically build the SET clause for optional fields
//     const setClauses = [];
//     if (movie_name !== undefined) setClauses.push('movie_name = @movie_name');
//     if (release_date !== undefined) setClauses.push('release_date = @release_date');
//     if (is_watched !== undefined) setClauses.push('is_watched = @is_watched');

//     if (setClauses.length === 0) {
//         return "No fields to update";
//     }

//     const query = `UPDATE Movies SET ${setClauses.join(', ')} WHERE movie_id = @movie_id`;

//     const request = db.request().input('movie_id', movie_id);

//     if (movie_name !== undefined) request.input('movie_name', movie_name);
//     if (release_date !== undefined) request.input('release_date', release_date);
//     // Important: MSSQL uses BIT for boolean, so ensure the input is handled correctly
//     if (is_watched !== undefined) request.input('is_watched', is_watched); 
    
//     // Note: I'm making a small change here to remove the COALESCE logic 
//     // in the service and rely on the controller/frontend to only send fields they want to update, 
//     // and using dynamic query building. If you MUST use COALESCE, the original query was mostly fine 
//     // but you would send null/undefined for fields not changing, which is less ideal.

//     // Reverting to your original query with COALESCE if you prefer that:
//     /*
//     const result = await db.request()
//         .input('movie_id', movie_id)
//         .input('movie_name', movie_name)
//         .input('release_date', release_date)
//         .input('is_watched', is_watched)
//         // NOTE: COALESCE(NULL, movie_name) will keep the existing value.
//         .query('UPDATE Movies SET movie_name = COALESCE(@movie_name, movie_name), release_date = COALESCE(@release_date, release_date), is_watched = COALESCE(@is_watched, is_watched) WHERE movie_id = @movie_id')
//     */
    
//     // Using the dynamic query builder for better explicit control
//     const result = await request.query(query);


//     return result.rowsAffected[0] === 1 ? "Movie Updated Successfully" : "Failed to update movie try again"
// }





// ... (deleteMovieByIdService remains the same)


// //Update existing movie
// export const updateMovieService = async (movie_id: number, movie_name: string, release_date: string, is_watched: boolean): Promise<string> => {
//     const db = getDbPool()
//     const result = await db.request()
//         .input('movie_id', movie_id)
//         .input('movie_name', movie_name)
//         .input('release_date', release_date)
//         .input('is_watched', is_watched)
//         .query('UPDATE Movies SET movie_name = COALESCE(@movie_name, movie_name), release_date = COALESCE(@release_date, release_date), is_watched = COALESCE(@is_watched, is_watched) WHERE movie_id = @movie_id')
//     return result.rowsAffected[0] === 1 ? "Movie Updated Successfully" : "Failed to update movie try again"
// }



//delete by id
export const deleteMovieByIdService = async (movie_id:number):Promise<string> => {
    const db = getDbPool();
    const result = await db.request()
        .input("movie_id", movie_id)
        .query('DELETE FROM Movies WHERE movie_id = @movie_id')
    return result.rowsAffected[0] === 1 ? "Movie deleted successfully" : "Failed to delete movie"
}