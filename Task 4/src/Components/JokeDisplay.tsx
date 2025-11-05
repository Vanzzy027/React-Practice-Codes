
import React from 'react';
import type { Joke } from '../types/JokeTypes';

interface JokeDisplayProps {
    jokeData: Joke;
    onDelete: (id: number) => void;
    onNext: () => void;
    onPrevious: () => void;
    currentIndex: number;
    totalJokes: number;
}
//  Styles a 
const JokeDisplay: React.FC<JokeDisplayProps> = ({ 
    jokeData, 
    onDelete, 
    onNext, 
    onPrevious,
    currentIndex,
    totalJokes
}) => {

    const deleteButtonStyle: React.CSSProperties = { /*  */ };
    const navButtonStyle: React.CSSProperties = { /*  */ };

    return (
        <div>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '30px', color: 'white' }}>
                <h1 style={{ fontSize: '2.5rem', margin: '0', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    🎭 Joke App
                </h1>
                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                    Current Joke: {currentIndex + 1} of {totalJokes} (Sorted Ascending)
                </p>
            </div>

            {/* Joke Content */}
            <div style={{ background: 'white', padding: '30px', margin: '20px 0', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', textAlign: 'center' }}>
                <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#333', margin: '20px 0', fontStyle: 'italic' }}>
                    "{jokeData.joke}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                    {Array.from({ length: Math.floor(jokeData.rating / 2) }, () => '⭐').join('')}
                    <span style={{ marginLeft: '10px', color: '#666' }}>
                        {jokeData.rating}/10
                    </span>
                </div>
            </div>

            {/* Buttons */}
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
                <button onClick={onPrevious} style={navButtonStyle} onMouseOver={(e) => e.currentTarget.style.background = 'white'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}>⬅️ Previous</button>
                <button
                    onClick={() => onDelete(jokeData.id)}
                    style={deleteButtonStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 0, 0, 0.8)'; e.currentTarget.style.border = '2px solid red'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 0, 0, 0.5)'; e.currentTarget.style.border = '2px solid #ff4d4d'; }}
                >
                    🗑️ Delete Joke
                </button>
                <button onClick={onNext} style={navButtonStyle} onMouseOver={(e) => e.currentTarget.style.background = 'white'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}>Next ➡️</button>
            </div>
        </div>
    );
};

export default JokeDisplay;
