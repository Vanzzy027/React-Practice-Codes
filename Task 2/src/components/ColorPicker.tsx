import React from 'react';

interface ColorPickerProps {
    colors: string[];
    onColorSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, onColorSelect }) => {
    
    const pickerStyle: React.CSSProperties = {
        display: 'flex',
        gap: '10px',
        padding: '15px',
        border: '2px solid purple', 
        borderRadius: '8px',
        backgroundColor: '#fff',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    };

    const colorButtonStyle = (color: string): React.CSSProperties => ({
        backgroundColor: color,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        cursor: 'pointer',
        border: '1px solid #333',
    });

    return (
        <div style={pickerStyle}>
            {colors.map((color) => (
                <button
                    key={color}
                    style={colorButtonStyle(color)}
                    onClick={() => onColorSelect(color)} 
                    aria-label={`Select color ${color}`}
                />
            ))}
        </div>
    );
};

export default ColorPicker;

