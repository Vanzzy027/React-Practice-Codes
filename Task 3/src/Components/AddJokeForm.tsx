import React from 'react';

interface AddJokeFormProps {
    newJoke: string;
    setNewJoke: (joke: string) => void;
    newRating: number;
    setNewRating: (rating: number) => void;
    addJoke: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddJokeForm: React.FC<AddJokeFormProps> = ({ newJoke, setNewJoke, newRating, setNewRating, addJoke }) => (
    <div style={{ background: 'white', padding: '25px', margin: '20px 0', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}>
        <h3 style={{ color: '#333', textAlign: 'center', marginBottom: '20px', fontSize: '1.4rem' }}>
            ➕ Add Joke
        </h3>
        <form onSubmit={addJoke}>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>
                    Your Joke:
                </label>
                <textarea
                    value={newJoke}
                    onChange={(e) => setNewJoke(e.target.value)}
                    placeholder="Enter your funny joke here... 😄"
                    style={{
                        width: '70%', height: '50px', padding: '12px', border: '2px solid #e9ecef', borderRadius: '10px',
                        fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e9ecef'}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>
                    Rating (1-10):
                </label>
                <input
                    type="number"
                    min="1" max="10" value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}
                    style={{ padding: '10px', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', width: '80px', outline: 'none', transition: 'border-color 0.3s ease' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e9ecef'}
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <button
                    type="submit"
                    style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)', color: 'white', padding: '12px 30px',
                        border: 'none', borderRadius: '25px', fontSize: '1.1rem', cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)', transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    Add Joke 🎭
                </button>
            </div>
        </form>
    </div>
);

export default AddJokeForm;
