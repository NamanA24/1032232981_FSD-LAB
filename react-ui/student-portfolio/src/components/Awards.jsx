import React from 'react';
import WindowBar from './WindowBar';

const Awards = () => {
    return (
        <section id="awards" className="card">
            <WindowBar />
            <h2>Awards & Achievements</h2>
            <ul className="awards">
                <li>🥈 Runners-up — HackMIT-WPU’25 (AWS Re’forge)</li>
                <li>🥈 Runners-up — HackMIT-WPU’25 (COSMOTRON)</li>
                <li>🥇 1st Place — Intra-Department Project Competition</li>
            </ul>
        </section>
    );
};

export default Awards;
