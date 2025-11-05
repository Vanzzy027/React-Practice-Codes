import React from 'react';

interface CarCardProps {
    make: string;
    model: string;
    year: number;
    color: string;
}
//FC is functional component
const CarCard: React.FC<CarCardProps> = ({ make, model, year, color }) => {
    const cardStyle: React.CSSProperties = {
        border: '2px solid blue',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9ff',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        color: '#000'
    };

    return (
        <div style={cardStyle}>
            <h3>🚗 {make} {model}</h3>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Color:</strong> <span style={{ color: color, fontWeight: 'bold' }}>{color}</span></p>
        </div>
    );
};

export default CarCard;
