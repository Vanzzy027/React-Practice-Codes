import { useState, useEffect, useCallback } from 'react'
import './App.css'
import jokesData from './data/jokesData.json'

import JokeDisplay from './Components/JokeDisplay';
import AddJokeForm from './Components/AddJokeForm';

interface Joke {
    id: number;
    joke: string;
    rating: number;
}
function App() {
  const [jokes, setJokes] = useState<Joke[]>([...jokesData].sort((a, b) => a.rating - b.rating));
  const [currentJoke, setCurrentJoke] = useState<number>(0);
  const [newJoke, setNewJoke] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(5);

  //  ascending
  const sortJokesByRating = useCallback((jokeList: Joke[]) => {
    return [...jokeList].sort((a, b) => b.rating - a.rating);
  }, []);

  // Reorder jokes after change
  useEffect(() => {
    setJokes(prevJokes => sortJokesByRating(prevJokes));
  }, [sortJokesByRating]);

  // Navigation
  const nextJoke = () => setCurrentJoke((prev) => (prev + 1) % jokes.length);
  const previousJoke = () => setCurrentJoke((prev) => (prev - 1 + jokes.length) % jokes.length);

  // Add joke
  const addJoke = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newJoke.trim()) {
      const newJokeObj: Joke = { id: Date.now(), joke: newJoke, rating: newRating };
      setJokes([...jokes, newJokeObj]); 
      setNewJoke('');
      setNewRating(5);
    }
  }

  // Delete joke
  const deleteJoke = (id: number) => {
    if (window.confirm("Are you sure you want to delete this joke?")) {
      const updatedJokes = jokes.filter(joke => joke.id !== id);
      setJokes(updatedJokes);
      if (currentJoke >= updatedJokes.length && updatedJokes.length > 0) {
        setCurrentJoke(updatedJokes.length - 1);
      } else if (updatedJokes.length === 0) {
        setCurrentJoke(0); 
      }
    }
  }
  
  // Handle empty list case
  if (jokes.length === 0) {
    return (
      <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto', background: '#f0f0f0', minHeight: '100vh' }}>
        <h1>No Jokes Available 😢</h1>
        <AddJokeForm newJoke={newJoke} setNewJoke={setNewJoke} newRating={newRating} setNewRating={setNewRating} addJoke={addJoke} />
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh'
    }}>
      
      <JokeDisplay 
        jokeData={jokes[currentJoke]}
        onDelete={deleteJoke}
        onNext={nextJoke}
        onPrevious={previousJoke}
        currentIndex={currentJoke}
        totalJokes={jokes.length}
      />

      <AddJokeForm 
        newJoke={newJoke} 
        setNewJoke={setNewJoke} 
        newRating={newRating} 
        setNewRating={setNewRating} 
        addJoke={addJoke}
      />

    </div>
  )
}

export default App;


