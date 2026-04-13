import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="top-bar">
            <div className="nav-left">
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === 'dark' ? '☀' : '◐'}
                </button>
                <span className="logo">◎ Naman</span>
            </div>
            <div className="nav-links">
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#awards">Awards</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
