import React from 'react';
import StarRating from './StarRating';

interface MovieCardProps {
    title: string;
    director: string;
    year: number;
    rating: number; // Out of 10
}

const MovieCard: React.FC<MovieCardProps> = ({ title, director, year, rating }) => {
    const cardStyle: React.CSSProperties = {
        border: '1px solid #444',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#333', 
        color: '#fff',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    };

    return (
        <div style={cardStyle}>
            <h3>🎬 {title} ({year})</h3>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Rating:</strong> {rating}/10</p>
            <StarRating rating={rating} max={10} /> {/* Use the utility */}
        </div>
    );
};

export default MovieCard;
