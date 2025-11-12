// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for proper usage
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo/Brand */}
                <div className="navbar-brand">
                    {/* Changed icon/text */}
                    <div className="logo-icon">🔑</div> 
                    <span className="brand-text">Cypher Phoods</span>
                </div>

                {/* Navigation Links */}
                <div className="navbar-menu">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/meals" className="navbar-link">Menu</Link>
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                    <Link to="/register" className="navbar-link">Register</Link>
                </div>

                {/* Login Button */}
                <div className="navbar-actions">
                    <Link to="/login" className="login-btn">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;