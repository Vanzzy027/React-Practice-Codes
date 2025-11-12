// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for proper usage
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="logo-icon">🔑</div>
                        <span className="brand-text">Cypher Phoods</span>
                    </div>
                    <p className="footer-description">
                        Decode Flavor. Elevate Your Palate. Artisanal meals crafted with precision.
                        Where every dish is a meticulously guarded culinary secret, revealed to you.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="footer-links">
                    <div className="footer-section">
                        <h3 className="footer-title">The Code</h3>
                        <ul className="footer-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/meals" className="footer-link">Menu Key</Link></li>
                            <li><Link to="/about" className="footer-link">About</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-list">
                            <li><Link to="/menu" className="footer-link">Full Menu</Link></li>
                            <li><Link to="/specialties" className="footer-link">Today's Cipher</Link></li>
                            <li><Link to="/catering" className="footer-link">Private Feasts</Link></li>
                            <li><Link to="/reservations" className="footer-link">Secret Access</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Support</h3>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Newsletter</a></li>
                            <li><a href="#" className="footer-link">FAQ</a></li>
                            <li><a href="#" className="footer-link">Support Desk</a></li>
                            <li><a href="#" className="footer-link">Careers (Join the Vault)</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="footer-copyright">
                        © 2025 Cypher Phoods. All rights reserved. Decoding the future of flavor.
                    </p>
                    <div className="footer-social">
                        <a href="" className="social-link">Privacy</a>
                        <a href="#" className="social-link">Terms</a>
                        <a href="#" className="social-link">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;