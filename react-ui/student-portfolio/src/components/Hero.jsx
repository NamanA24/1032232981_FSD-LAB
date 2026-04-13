import React from 'react';
import WindowBar from './WindowBar';

const Hero = () => {
    return (
        <section className="card hero-card">
            <WindowBar />
            <div className="hero-grid">
                <div className="hero-text">
                    <h1>Hello.<br />I’m Naman.</h1>
                    <p>
                        Computer Science Engineering student interested in
                        AI, Cloud Systems, and Software Engineering.
                    </p>
                    <div className="hero-actions">
                        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn">View Resume</a>
                        <a href="/resume.pdf" download className="btn">Download Resume</a>
                    </div>
                </div>

                <div className="hero-meta">
                    <div>
                        <strong>Role</strong>
                        <span>CSE Undergraduate</span>
                    </div>
                    <div>
                        <strong>Focus</strong>
                        <span>AI · Cloud · Systems</span>
                    </div>
                    <div>
                        <strong>University</strong>
                        <span>MIT-WPU</span>
                    </div>
                    <div>
                        <strong>Status</strong>
                        <span>Open to Internships</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
