import { useReducer } from 'react';
import { jokesReducer, initialState } from './reducers/JokeReducer';
import JokeDisplay from './Components/JokeDisplay';
import AddJokeForm from './Components/AddJokeForm';
import React from 'react';
import type { JokesAction } from './types/JokeTypes';


function App() {
  const [state, dispatch] = useReducer(jokesReducer, initialState);
  const { jokes, currentJokeIndex } = state;

  // Handlers dispatch 
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this joke?")) {
        dispatch({ type: 'DELETE_JOKE', payload: { id } });
    }
  };
  
  const handleNext = () => dispatch({ type: 'NEXT_JOKE' });
  const handlePrevious = () => dispatch({ type: 'PREVIOUS_JOKE' });


  // Handle empty list case
  if (jokes.length === 0) {
    return (
      <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto', background: '#f0f0f0', minHeight: '100vh' }}>
        <h1>No Jokes Available 😢</h1>
        <AddJokeForm dispatch={dispatch} />
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh'
    }}>
      
      <JokeDisplay 
        jokeData={jokes[currentJokeIndex]}
        onDelete={handleDelete}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentIndex={currentJokeIndex}
        totalJokes={jokes.length}
      />

      <AddJokeForm dispatch={dispatch} />

    </div>
  );
}

export default App;
