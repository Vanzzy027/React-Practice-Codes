// src/components/home/WhatYouWillGet.tsx

import React from 'react';
import './WhatYouWillGet.css';

const WhatYouWillGet: React.FC = () => {
    return (
        <section className="what-you-get">
            <div className="container">
                {/* Updated Title */}
                <h2 className="section-title">The Cypher Phoods Difference</h2>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🌿</div>
                        <h3>Ethical Sourcing</h3>
                        <p>We unlock the best flavors using sustainably sourced, premium-grade ingredients.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">✨</div>
                        <h3>Crafted Precision</h3>
                        <p>Every dish is a carefully coded recipe, executed with culinary mastery and passion.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Seamless Experience</h3>
                        <p>Our intuitive platform makes browsing and ordering effortless, securing your perfect meal in seconds.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatYouWillGet;