import React from 'react';

interface PhoneCardProps {
    brand: string;
    model: string;
    price: number;
    features: string[];
}

const PhoneCard: React.FC<PhoneCardProps> = ({ brand, model, price, features }) => {
    const cardStyle: React.CSSProperties = {
        border: '2px solid blue',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9ff',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        color: '#333'
    };

    return (
        <div style={cardStyle}>
            <h3>📱 {brand} {model}</h3>
            <p><strong>Price:</strong> Ksh{price.toLocaleString()}</p>
            <h4>Features:</h4>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PhoneCard;
