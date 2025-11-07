import { useState, type CSSProperties } from 'react'; // Import CSSProperties

interface MovieToWatch {
  movie_id: number
  movie_name: string
  release_date: string
  is_watched: boolean
  created_at: string
}

interface MovieCardProps {
  movie: MovieToWatch;
  deleteMovie?: (id: number) => void;
  toggleWatched?: (movie: MovieToWatch) => void;
  updateMovie?: (id: number, newName: string) => void;
}

const MovieCard = ({ movie, deleteMovie, toggleWatched, updateMovie }: MovieCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newMovieName, setNewMovieName] = useState(movie.movie_name);

  const handleUpdate = () => {
    if (updateMovie && newMovieName.trim() !== '' && newMovieName !== movie.movie_name) {
      updateMovie(movie.movie_id, newMovieName);
    }
    setIsEditing(false);
  };
  
  // FIX: Explicitly type cardStyle as CSSProperties
  const cardStyle: CSSProperties = {
    background: 'white',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    border: `2px solid ${movie.is_watched ? '#00b894' : '#fdcb6e'}`,
    cursor: 'pointer',
    position: 'relative', // TypeScript now knows this must be a valid 'position' value
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  return (
    <div style={cardStyle}>
      {/* Status Badge */}
      <div
        // FIX: No explicit type needed here, as the object literal is validated 
        // against the expected style prop type, which knows about CSSProperties.
        style={{ 
          position: 'absolute', // This is now correctly validated
          top: '15px',
          right: '15px',
          background: movie.is_watched ? '#00b894' : '#fdcb6e',
          color: 'white',
          padding: '5px 12px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 10
        }}>
        {movie.is_watched ? '✅ Watched' : '⏰ To Watch'}
      </div>


      {/* Movie Title / Edit Field (Rest of the component remains the same) */}
      {isEditing ? (
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={newMovieName}
            onChange={(e) => setNewMovieName(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleUpdate();
            }}
          />
        </div>
      ) : (
        <h2
          style={{
            color: '#2d3436',
            fontSize: '1.4rem',
            marginBottom: '10px',
            fontWeight: 'bold',
            lineHeight: '1.3'
          }}>
          {movie.movie_name}
        </h2>
      )}
      
      {/* Movie Details */}
      <div style={{ marginBottom: '15px' }}>
        <p
          style={{
            margin: '8px 0',
            color: '#636e72',
            fontSize: '1.0rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
          <span>📅</span>
          <strong>Release:</strong> {new Date(movie.release_date).toLocaleDateString()}
        </p>

        <p
          style={{
            margin: '8px 0',
            color: '#636e72',
            fontSize: '1.0rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
          <span>📝</span>
          <strong>Added:</strong> {new Date(movie.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* Status Indicator */}
      <div style={{
        padding: '12px',
        background: movie.is_watched ? '#d1f2eb' : '#fef9e7',
        borderRadius: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: movie.is_watched ? '#00b894' : '#e17055',
        fontSize: '0.9rem'
      }}>
        {movie.is_watched
          ? '🍿 Already enjoyed this movie!'
          : '🎯 Ready to watch next!'
        }
      </div>

      {/* Action Buttons: Update, Toggle Watched, Delete */}
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        
        {/* Update Button */}
        <button
          onClick={() => isEditing ? handleUpdate() : setIsEditing(true)}
          style={{
            flex: '1',
            background: isEditing ? '#2e86de' : '#a29bfe',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'background 0.3s'
          }}
        >
          {isEditing ? '💾 Save Title' : '✏️ Edit Title'}
        </button>

        {/* Toggle Watched Button */}
        <button
          onClick={() => toggleWatched && toggleWatched(movie)}
          style={{
            flex: '1',
            background: movie.is_watched ? '#00b894' : '#fdcb6e',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'background 0.3s'
          }}
        >
          {movie.is_watched ? '↩️ Mark Unwatched' : '✅ Mark Watched'}
        </button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => deleteMovie && deleteMovie(movie.movie_id)}
          style={{
            width: '100%',
            background: '#e17055',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'background 0.3s'
          }}
        >
          🗑️ Remove Movie
        </button>
      </div>
    </div>
  )
}

export default MovieCard




// import { useState } from 'react';

// interface MovieToWatch {
//   movie_id: number
//   movie_name: string
//   release_date: string
//   is_watched: boolean
//   created_at: string
// }

// interface MovieCardProps {
//   movie: MovieToWatch;
//   deleteMovie?: (id: number) => void;
//   // Updated type: now accepts the full movie object for update/toggle
//   toggleWatched?: (movie: MovieToWatch) => void; 
//   updateMovie?: (id: number, newName: string) => void; // New prop for updating
// }

// const MovieCard = ({ movie, deleteMovie, toggleWatched, updateMovie }: MovieCardProps) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newMovieName, setNewMovieName] = useState(movie.movie_name);

//   // Function to handle the update/save
//   const handleUpdate = () => {
//     if (updateMovie && newMovieName.trim() !== '' && newMovieName !== movie.movie_name) {
//       updateMovie(movie.movie_id, newMovieName);
//     }
//     setIsEditing(false); // Exit editing mode
//   };
  
//   // Style adjustment: smaller border, slightly more padding
//   const cardStyle = {
//     background: 'white',
//     borderRadius: '15px',
//     padding: '25px', // Slightly increased padding
//     boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//     border: `2px solid ${movie.is_watched ? '#00b894' : '#fdcb6e'}`, // Thinner border
//     cursor: 'pointer',
//     position: 'relative',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//   };

//   return (
//     <div style={cardStyle}>
//       {/* Status Badge */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '15px', // Adjusted position
//           right: '15px',
//           background: movie.is_watched ? '#00b894' : '#fdcb6e',
//           color: 'white',
//           padding: '5px 12px',
//           borderRadius: '20px',
//           fontSize: '0.8rem', // Slightly smaller font
//           fontWeight: 'bold',
//           zIndex: 10
//         }}>
//         {movie.is_watched ? '✅ Watched' : '⏰ To Watch'}
//       </div>


//       {/* Movie Title / Edit Field */}
//       {isEditing ? (
//         <div style={{ marginBottom: '10px' }}>
//           <input
//             type="text"
//             value={newMovieName}
//             onChange={(e) => setNewMovieName(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '8px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//               fontSize: '1.2rem',
//               fontWeight: 'bold'
//             }}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') handleUpdate();
//             }}
//           />
//         </div>
//       ) : (
//         <h2
//           style={{
//             color: '#2d3436',
//             fontSize: '1.4rem',
//             marginBottom: '10px',
//             fontWeight: 'bold',
//             lineHeight: '1.3'
//           }}>
//           {movie.movie_name}
//         </h2>
//       )}
      
//       {/* Movie Details (No change) */}
//       <div style={{ marginBottom: '15px' }}>
//         <p
//           style={{
//             margin: '8px 0',
//             color: '#636e72',
//             fontSize: '1.0rem',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }}>
//           <span>📅</span>
//           <strong>Release:</strong> {new Date(movie.release_date).toLocaleDateString()}
//         </p>

//         <p
//           style={{
//             margin: '8px 0',
//             color: '#636e72',
//             fontSize: '1.0rem',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }}>
//           <span>📝</span>
//           <strong>Added:</strong> {new Date(movie.created_at).toLocaleDateString()}
//         </p>
//       </div>

//       {/* Status Indicator (No change) */}
//       <div style={{
//         padding: '12px',
//         background: movie.is_watched ? '#d1f2eb' : '#fef9e7',
//         borderRadius: '10px',
//         textAlign: 'center',
//         fontWeight: 'bold',
//         color: movie.is_watched ? '#00b894' : '#e17055',
//         fontSize: '0.9rem'
//       }}>
//         {movie.is_watched
//           ? '🍿 Already enjoyed this movie!'
//           : '🎯 Ready to watch next!'
//         }
//       </div>

//       {/* Action Buttons: Update, Toggle Watched, Delete */}
//       <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        
//         {/* NEW: Update Button */}
//         <button
//           onClick={() => isEditing ? handleUpdate() : setIsEditing(true)}
//           style={{
//             flex: '1',
//             background: isEditing ? '#2e86de' : '#a29bfe', // Blue when saving, Purple when editing
//             color: 'white',
//             border: 'none',
//             padding: '10px 15px',
//             borderRadius: '8px',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             fontSize: '0.9rem',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             transition: 'background 0.3s'
//           }}
//         >
//           {isEditing ? '💾 Save Title' : '✏️ Edit Title'}
//         </button>

//         {/* Toggle Watched Button (connected to prop) */}
//         <button
//           onClick={() => toggleWatched && toggleWatched(movie)} // Using the new prop
//           style={{
//             flex: '1',
//             background: movie.is_watched ? '#00b894' : '#fdcb6e',
//             color: 'white',
//             border: 'none',
//             padding: '10px 15px',
//             borderRadius: '8px',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             fontSize: '0.9rem',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             transition: 'background 0.3s'
//           }}
//         >
//           {movie.is_watched ? '↩️ Mark Unwatched' : '✅ Mark Watched'}
//         </button>

//         {/* Delete Button (moved to second line for cleaner layout, now takes full width on the second line) */}
//       </div>

//       <div style={{ marginTop: '10px' }}>
//         <button
//           onClick={() => deleteMovie && deleteMovie(movie.movie_id)}
//           style={{
//             width: '100%',
//             background: '#e17055',
//             color: 'white',
//             border: 'none',
//             padding: '10px 15px',
//             borderRadius: '8px',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             fontSize: '0.9rem',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             transition: 'background 0.3s'
//           }}
//         >
//           🗑️ Remove Movie
//         </button>
//       </div>
//     </div>
//   )
// }

// export default MovieCard








// interface MovieToWatch {
//     movie_id: number
//     movie_name: string
//     release_date: string
//     is_watched: boolean
//     created_at: string
// }

// interface MovieCardProps {
//     movie: MovieToWatch;
//     deleteMovie?: (id: number) => void;
//     toggleWatched?: (id: number) => void;
// }

// const MovieCard = ({ movie, deleteMovie, toggleWatched }: MovieCardProps) => {
//     return (
//         <div
//             style={{
//                 background: 'white',
//                 borderRadius: '15px',
//                 padding: '20px',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//                 border: `3px solid ${movie.is_watched ? '#00b894' : '#fdcb6e'}`,
//                 cursor: 'pointer',
//                 position: 'relative'
//             }}>
//             {/* Status Badge */}
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: '3px',
//                     right: '15px',
//                     background: movie.is_watched ? '#00b894' : '#fdcb6e',
//                     color: 'white',
//                     padding: '5px 12px',
//                     borderRadius: '20px',
//                     fontSize: '0.9rem',
//                     fontWeight: 'bold'
//                 }}>
//                 {movie.is_watched ? '✅ Watched' : '⏰ To Watch'}
//             </div>


//             {/* Movie Title */}
//             <h2
//                 style={{
//                     color: '#2d3436',
//                     fontSize: '1.4rem',
//                     marginBottom: '10px',
//                     fontWeight: 'bold',
//                     lineHeight: '1.3'
//                 }}>
//                 {movie.movie_name}
//             </h2>

//             {/* Movie Details */}
//             <div style={{ marginBottom: '15px' }}>
//                 <p
//                     style={{
//                         margin: '8px 0',
//                         color: '#636e72',
//                         fontSize: '1.0rem',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px'
//                     }}>
//                     <span>📅</span>
//                     <strong>Release:</strong> {new Date(movie.release_date).toLocaleDateString()}
//                 </p>

//                 <p
//                     style={{
//                         margin: '8px 0',
//                         color: '#636e72',
//                         fontSize: '1.0rem',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px'
//                     }}>
//                     <span>📝</span>
//                     <strong>Added:</strong> {new Date(movie.created_at).toLocaleDateString()}
//                 </p>
//             </div>

//             {/* Status Indicator */}
//             <div style={{
//                 padding: '12px',
//                 background: movie.is_watched ? '#d1f2eb' : '#fef9e7',
//                 borderRadius: '10px',
//                 textAlign: 'center',
//                 fontWeight: 'bold',
//                 color: movie.is_watched ? '#00b894' : '#e17055',
//                 fontSize: '0.9rem'
//             }}>
//                 {movie.is_watched
//                     ? '🍿 Already enjoyed this movie!'
//                     : '🎯 Ready to watch next!'
//                 }
//             </div>

//                 {/* Add btn later */}
//             {/* Button to delete and mark as watched */}
//             <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
//                 <button
//                     style={{
//                         flex: '1',
//                         background: movie.is_watched ? '#00b894' : '#fdcb6e',
//                         color: 'white',
//                         border: 'none',
//                         padding: '10px 15px',
//                         borderRadius: '8px',
//                         fontWeight: 'bold',
//                         cursor: 'pointer',
//                         fontSize: '0.9rem',
//                         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                     }}
                    
//                 >
//                     {movie.is_watched ? '↩️ Mark Unwatched' : '✅ Mark Watched'}
//                 </button>
//                 <button
//                         onClick={() => deleteMovie && deleteMovie(movie.movie_id)}
//                     style={{
//                         background: '#e17055',
//                         color: 'white',
//                         border: 'none',
//                         padding: '10px 15px',
//                         borderRadius: '8px',
//                         fontWeight: 'bold',
//                         cursor: 'pointer',
//                         fontSize: '0.9rem',
//                         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                     }}
//                 >
//                     🗑️ Remove
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default MovieCard