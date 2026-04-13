import React, { useState } from 'react';
import WindowBar from './WindowBar';
import DemoModal from './DemoModal';

const Projects = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section id="projects" className="card">
            <WindowBar />
            <h2>Projects</h2>

            <div className="project window">
                <h3>AI-Driven Cloud Drug Management System</h3>
                <p className="meta">HackMIT-WPU’25 · AWS Re’forge · Runners-up</p>
                <p>
                    Cloud-based drug inventory and supply chain system using AWS.
                    Integrated AI-based demand forecasting, IoT storage monitoring,
                    and blockchain-backed traceability.
                </p>
            </div>

            <div className="project window">
                <h3>Explainable AI-Based Supply Chain Analytics</h3>
                <p className="meta">1st Place · Intelligent Agents Track</p>
                <p>
                    Built Random Forest models to predict late delivery risk and
                    order profitability. Achieved 72.4% accuracy and 0.998 R².
                    Implemented SHAP for transparent model explainability.
                </p>
            </div>

            <div className="project window">
                <h3>Student Web Portfolio</h3>
                <p className="meta">Student Portfolio</p>
                <p>
                    A responsive personal portfolio showcasing projects, skills, education,
                    and achievements.
                    <button onClick={() => setModalOpen(true)} className="demo-link">Demo</button>
                </p>
            </div>

            <div className="project window">
                <h3>All-Sky Camera System</h3>
                <p className="meta">Raspberry Pi · Image Processing</p>
                <p>
                    Developed an automated night-sky monitoring system using Raspberry Pi 5.
                    Implemented continuous sky imaging and data visualization pipelines.
                </p>
            </div>

            <DemoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
};

export default Projects;
