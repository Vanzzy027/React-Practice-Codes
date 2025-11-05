import React from 'react';
import StarRating from './StarRating';

interface RestaurantCardProps {
    name: string;
    cuisine: string;
    rating: number; // Out of 5
    location: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, cuisine, rating, location }) => {
    const cardStyle: React.CSSProperties = {
        border: '2px solid #28a745', 
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e9f7ef', 
        color: '#000',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };

    return (
        <div style={cardStyle}>
            <h3>🍔 {name}</h3>
            <p><strong>Cuisine:</strong> {cuisine}</p>
            <p><strong>Location:</strong> {location}</p>
            <StarRating rating={rating} max={5} /> {/* Use the utility */}
        </div>
    );
};

export default RestaurantCard;

