import React from 'react';
import WindowBar from './WindowBar';

const Education = () => {
    return (
        <div className="card">
            <WindowBar />
            <h2>Education</h2>

            <div className="edu">
                <h3>MIT World Peace University, Pune</h3>
                <p>B.Tech – Computer Science & Engineering</p>
                <p className="meta">2023 – 2027 · CGPA: 8.77 / 10</p>
            </div>

            <div className="edu">
                <h3>SVP Junior College of Science, Mumbai</h3>
                <p>HSC (MSBSHSC)</p>
                <p className="meta">2023 · 79.50%</p>
            </div>

            <div className="edu">
                <h3>Swami Vivekanand International School, Mumbai</h3>
                <p>ICSE</p>
                <p className="meta">2021 · 98.40%</p>
            </div>
        </div>
    );
};

export default Education;
