import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import CarCard from './components/CarCard';
import RestaurantCard from './components/RestaurantCard';
import PhoneCard from './components/PhoneCard';
import ColorPicker from './components/ColorPicker';

const App = () => {
  
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

 
  const appContainerStyle: React.CSSProperties = {
    display: 'grid',
    // Responsive grid
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '20px',
    padding: '20px',
    backgroundColor: selectedColor, // Dynamic bg col
    minHeight: '100vh',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#333' }}>
          💣 React here we go
      </h1>

      <MovieCard
        title="Oppenheimer"
        director="Christopher Nolan"
        year={2023}
        rating={8.3} // Rating out of 10
      />
      
      <CarCard
        make="Ford"
        model="Mustang"
        year={1967}
        color="Red"
      />
      
      <RestaurantCard
        name="Castle Garden"
        cuisine="Japanese"
        rating={3} // Rating out of 5
        location="Tokyo, Japan"
      />
      
      <PhoneCard
        brand="Google"
        model="Pixel 8"
        price={699}
        features={['Great Camera', 'Pure Android', 'AI Features']}
      />

      {/* Color Picker  */}
      <div style={{ gridColumn: '1 / -1', marginTop: '20px' }}>
        <h3 style={{textAlign: 'center'}}>🎨 Color Picker</h3>
        <ColorPicker
            colors={['#FF5733', '#3371FF', '#33FF57', '#FF33F6']}
            onColorSelect={handleColorSelect}
        />
      </div>

    </div>
  );
};

export default App;

