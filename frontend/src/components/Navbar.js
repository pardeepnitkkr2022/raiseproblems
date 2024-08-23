import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <nav>
            <div className="brand">MyApp</div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                <li><Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                <li><Link to="/problems" onClick={() => setIsMenuOpen(false)}>Problems</Link></li>
                <li><Link to="/create-problem" onClick={() => setIsMenuOpen(false)}>Create Problem</Link></li>
                <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
