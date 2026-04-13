import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Retrieve theme from local storage or set default
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="page">
                <div className="container">
                    <Hero />
                    <About />
                    <Projects />
                    
                    <section className="two-col" id="education">
                        <Education />
                        <Skills />
                    </section>
                    
                    <Awards />
                    <Contact />
                </div>
            </main>
            <footer className="site-footer">
                <p>© {new Date().getFullYear()} Naman Agarwal · Portfolio</p>
            </footer>
        </>
    );
}

export default App;
