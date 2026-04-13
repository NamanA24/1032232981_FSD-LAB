import React from 'react';
import WindowBar from './WindowBar';

const About = () => {
    return (
        <section className="card profile">
            <WindowBar />
            <div className="profile-grid">
                <div className="profile-img">
                    <img src="/images/profile.jpg" alt="Profile Photo" />
                </div>
                <div className="profile-content">
                    <h2>About Me</h2>
                    <p>
                        I am a Computer Science Engineering student with a strong foundation in
                        software development, artificial intelligence, and data-driven systems.
                        I enjoy building scalable applications, solving real-world problems using
                        machine learning, and working on technically challenging projects through
                        hackathons, research initiatives, and academic work.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
