import { useState, useEffect } from 'react'
import './App.css'

// Updated interface to reflect the properties needed for all jokes in the array
interface Joke {
  type: string
  setup: string
  punchline: string
  id: number
}

function App() {
  // State now holds an array of Jokes, initialized to null
  const [jokes, setJokes] = useState<Joke[] | null>(null)
  const [loading, setLoading] = useState(false)
  // currentIndex state is no longer needed because we list all jokes at once
  // const [currentIndex, setCurrentIndex] = useState(0)

  // console.log('App component rendered. Current joke index:', currentIndex); // No longer relevant
  console.log('Current jokes array:', jokes);

  // useEffect to fetch joke data
  const fetchJoke = async () => {
    setLoading(true)
    console.log('Fetching jokes initiated...');
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_ten')
      
      if (!response.ok) {
          console.error('API response not OK:', response.statusText);
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Joke[] = await response.json()
      console.log('Data received successfully from API:', data);

      if (Array.isArray(data) && data.length > 0) {
        setJokes(data)
        // setCurrentIndex(0) // No longer needed
        console.log('Jokes state updated with 10 jokes.');
      } else {
        console.warn('Fetched data was empty or not an array:', data);
        setJokes(null); // Handle cases where API returns an empty array unexpectedly
      }

    } catch (error) {
      console.error('Error during fetch operation:', error)
    } finally {
      setLoading(false)
      console.log('Fetching process finished (loading set to false).');
    }
  }
  
  
  useEffect(() => {
    console.log('useEffect triggered on mount.');
    fetchJoke() // Fetch initial batch of jokes on mount
  }, [])

  // The showNextJoke function is also no longer needed, we'll replace it with a simple refetch function
  const fetchNewBatch = () => {
    fetchJoke();
  };

  // currentJoke variable is no longer needed as we iterate over the whole array
  // const currentJoke = jokes ? jokes[currentIndex] : null;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3> 😂 useEffect Joke List App </h3>
        <p > A list of 10 fresh jokes! </p>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⏳</div>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>Loading fresh jokes...</p>
        </div>
      )}

      {/* Joke List Container */}
      {!loading && jokes && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Map through the jokes array to render each joke */}
          {jokes.map((joke) => (
            <div 
              key={joke.id} 
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                borderLeft: '5px solid #4ecdc4'
              }}
            >
              <p style={{ color: '#333', marginBottom: '10px', lineHeight: '1.4', fontWeight: 'bold' }}>
                {joke.setup}
              </p>
              <p style={{ fontSize: '1rem', color: '#ff6b6b', fontStyle: 'italic' }}>
                {joke.punchline} 😄
              </p>
            </div>
          ))}
        </div>
      )}
      
      {/* Error/Empty State */}
      {!loading && !jokes && (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>❌</div>
            <p style={{ color: '#666' }}>Oops! Failed to load jokes or list is empty.</p>
        </div>
      )}


      {/* Get New Jokes Button */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={fetchNewBatch} // Use the new function to refetch the entire list
          disabled={loading}
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1.1rem',
            cursor:  'pointer',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            fontWeight: 'bold'
          }}
        >
          {loading ? '⏳ Loading...' : '🎲 Get New Batch of Jokes!'}
        </button>
      </div>

      {/* Learning Note */}
      <div style={{
        background: 'rgba(0,0,0,0.05)',
        padding: '15px',
        borderRadius: '10px',
        marginTop: '20px',
        textAlign: 'center',
        color: '#555'
      }}>
        <p style={{ margin: '0', fontSize: '0.9rem' }}>
          💡 <strong>Debugging:</strong> Check your browser's Console (F12) and Network tabs!
        </p>
        {jokes && <p style={{margin: '5px 0 0'}}>Total jokes listed: {jokes.length}.</p>}
      </div>
    </div>
  )
}

export default App;



// import { useState, useEffect } from 'react'
// import './App.css'

// // Updated interface to reflect the properties needed for all jokes in the array
// interface Joke {
//   type: string
//   setup: string
//   punchline: string
//   id: number
// }

// function App() {
//   // State now holds an array of Jokes, initialized to null
//   const [jokes, setJokes] = useState<Joke[] | null>(null)
//   const [loading, setLoading] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0) // Track which joke is currently displayed

//   console.log('App component rendered. Current joke index:', currentIndex);
//   console.log('Current jokes array:', jokes);

//   // useEffect to fetch joke data
//   const fetchJoke = async () => {
//     setLoading(true)
//     console.log('Fetching jokes initiated...');
//     try {
//       const response = await fetch('https://official-joke-api.appspot.com/random_ten')
      
//       if (!response.ok) {
//           console.error('API response not OK:', response.statusText);
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data: Joke[] = await response.json()
//       console.log('Data received successfully from API:', data);

//       if (Array.isArray(data) && data.length > 0) {
//         setJokes(data)
//         setCurrentIndex(0) // Reset to the first joke of the new batch
//         console.log('Jokes state updated with 10 jokes.');
//       } else {
//         console.warn('Fetched data was empty or not an array:', data);
//         setJokes(null); // Handle cases where API returns an empty array unexpectedly
//       }

//     } catch (error) {
//       console.error('Error during fetch operation:', error)
//     } finally {
//       setLoading(false)
//       console.log('Fetching process finished (loading set to false).');
//     }
//   }
  
  
//   useEffect(() => {
//     console.log('useEffect triggered on mount.');
//     fetchJoke() // Fetch initial batch of jokes on mount
//   }, [])

//   // Function to show the next joke in the array
//   const showNextJoke = () => {
//     if (jokes && currentIndex < jokes.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else if (jokes) {
//       // Option: Refetch if we run out of jokes
//       console.log('Reached the end of the jokes list, refetching a new batch.');
//       fetchJoke();
//     }
//   };

//   // Determine the current joke to display
//   const currentJoke = jokes ? jokes[currentIndex] : null;

//   return (
//     <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
//       {/* Header */}
//       <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//         <h3> 😂 useEffect Joke App </h3>
//         <p > Fresh jokes with every fetch! </p>
//       </div>

//       {/* Joke Card */}
//       <div style={{
//         background: 'white',
//         padding: '30px',
//         borderRadius: '20px',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//         textAlign: 'center',
//         marginBottom: '20px'
//       }}>
//         {loading ? (
//           <div>
//             <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⏳</div>
//             <p style={{ color: '#666', fontSize: '1.2rem' }}>Loading fresh jokes...</p>
//           </div>
//         ) : currentJoke ? ( // Check if currentJoke is available
//           <div>
//             <div>🎭</div>
//             <p style={{ color: '#333',  marginBottom: '15px',  lineHeight: '1.5'      }}>
//               {currentJoke.setup}
//             </p>
//             <p style={{ fontSize: '1.1rem', color: '#ff6b6b', fontStyle: 'italic', fontWeight: 'bold' }}>
//               {currentJoke.punchline} 😄
//             </p>
//           </div>
//         ) : (
//           <div>
//             <div style={{ fontSize: '3rem', marginBottom: '10px' }}>❌</div>
//             <p style={{ color: '#666' }}>Oops! Failed to load joke or list is empty.</p>
//           </div>
//         )}
//       </div>

//       {/* Get New Joke Button / Next Joke Button */}
//       <div style={{ textAlign: 'center' }}>
//         <button
//           onClick={showNextJoke}
//           disabled={loading}
//           style={{
//             background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
//             color: 'white',
//             border: 'none',
//             padding: '15px 30px',
//             borderRadius: '25px',
//             fontSize: '1.1rem',
//             cursor:  'pointer',
//             boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
//             fontWeight: 'bold'
//           }}
//         >
//           {loading ? '⏳ Loading...' : (jokes && currentIndex < jokes.length - 1 ? '➡️ Next Joke' : '🎲 Get New Batch of Jokes!')}
//         </button>
//       </div>

//       {/* Learning Note */}
//       <div style={{
//         background: 'rgba(0,0,0,0.05)',
//         padding: '15px',
//         borderRadius: '10px',
//         marginTop: '20px',
//         textAlign: 'center',
//         color: '#555'
//       }}>
//         <p style={{ margin: '0', fontSize: '0.9rem' }}>
//           💡 <strong>Debugging:</strong> Check your browser's Console (F12) and Network tabs!
//         </p>
//         {jokes && <p style={{margin: '5px 0 0'}}>Showing joke {currentIndex + 1} of {jokes.length}.</p>}
//       </div>
//     </div>
//   )
// }

// export default App



// import { useState, useEffect } from 'react'
// import './App.css'

// interface Joke {
//   type: string
//   setup: string
//   punchline: string
//   id: number
// }

// function App() {
//   const [joke, setJoke] = useState<Joke | null>(null)
//   const [loading, setLoading] = useState(false)

//   // 🎯 useEffect to fetch joke data
//   const fetchJoke = async () => {
//     setLoading(true)
//     try {
//       const response = await fetch('https://official-joke-api.appspot.com/random_ten')
//       const data = await response.json()
//       setJoke(data)
//     } catch (error) {
//       console.error('Error fetching joke:', error)
//     } finally {
//       setLoading(false)
//     }
//   }
  
  
//   useEffect(() => {
//     fetchJoke() // Fetch initial joke on mount
//   }, [])

//   return (
//     <div >
//       {/* Header */}
//       <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//         <h3> 😂 useEffect Joke App </h3>
//         <p > Fresh jokes with every fetch! </p>
//       </div>

//       {/* Joke Card */}
//       <div style={{
//         background: 'white',
//         padding: '30px',
//         borderRadius: '20px',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//         textAlign: 'center',
//         marginBottom: '20px'
//       }}>
//         {loading ? (
//           <div>
//             <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⏳</div>
//             <p style={{ color: '#666', fontSize: '1.2rem' }}>Loading a fresh joke...</p>
//           </div>
//         ) : joke ? (
//           <div>
//             <div>🎭</div>
//             <p style={{ color: '#333',  marginBottom: '15px',  lineHeight: '1.5'      }}>
//               {joke.setup}
//             </p>
//             <p style={{ fontSize: '1.1rem', color: '#ff6b6b', fontStyle: 'italic', fontWeight: 'bold' }}>
//               {joke.punchline} 😄
//             </p>
//           </div>
//         ) : (
//           <div>
//             <div style={{ fontSize: '3rem', marginBottom: '10px' }}>❌</div>
//             <p style={{ color: '#666' }}>Oops! Failed to load joke</p>
//           </div>
//         )}
//       </div>

//       {/* Get New Joke Button */}
//       <div style={{ textAlign: 'center' }}>
//         <button
//           onClick={fetchJoke}
//           disabled={loading}
//           style={{
//             background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
//             color: 'white',
//             border: 'none',
//             padding: '15px 30px',
//             borderRadius: '25px',
//             fontSize: '1.1rem',
//             cursor:  'pointer',
//             boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
//             fontWeight: 'bold'
//           }}
         
//         >
//           {loading ? '⏳ Loading...' : '🎲 Get New Joke!'}
//         </button>
//       </div>

//       {/* Learning Note */}
//       <div style={{
//         background: 'rgba(255,255,255,0.1)',
//         padding: '15px',
//         borderRadius: '10px',
//         marginTop: '20px',
//         textAlign: 'center',
//         color: 'white'
//       }}>
//         <p style={{ margin: '0', fontSize: '0.9rem' }}>
//           💡 <strong>useEffect Demo:</strong> Watch the network tab to see API calls!
//         </p>
//       </div>
//     </div>
//   )
// }

// export default App
