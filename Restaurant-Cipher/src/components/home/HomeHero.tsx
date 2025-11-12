// src/components/home/HomeHero.tsx

import React from 'react';
import './HomeHero.css';

const HomeHero: React.FC = () => {
    // New Image Source: Focused on quality, artisanal, or tech-meets-food vibe (Cypher)
    const heroImageUrl = 'https://images.unsplash.com/photo-1547595304-4b553654483b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80';

    return (
        <div className="hero">
            <div className="hero-content">
                {/* Updated to Cypher Phoods */}
                <h1 className="hero-title">CYPHER PHOODS</h1>
                {/* Updated tagline for a more unique, 'cypher' feel */}
                <p className="hero-subtitle">
                    Decode Flavor. Elevate Your Palate. Artisanal meals crafted with precision.
                </p>
                <button className="hero-btn">Explore The Menu Key</button>
            </div>
            <div className="hero-image">
                <img
                    src={heroImageUrl}
                    alt="Artisanal food presentation or dark kitchen setting"
                />
            </div>
        </div>
    );
}

export default HomeHero;