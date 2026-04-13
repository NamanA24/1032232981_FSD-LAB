import React from 'react';
import WindowBar from './WindowBar';

const Contact = () => {
    return (
        <section id="contact" className="card">
            <WindowBar />
            <h2>Contact</h2>
            <p>Email: <a href="mailto:ncgagarwal@gmail.com">ncgagarwal@gmail.com</a></p>
            <p>Phone: <a href="tel:+919321575673">+91 93215 75673</a></p>
            <p>Location: Mumbai, India</p>

            <div className="contact-links">
                <a href="https://www.linkedin.com/in/naman-agarwal24" target="_blank" rel="noreferrer" className="contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.74 2.63 4.74 6.04v7.96h-4v-7.05c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72v7.17h-4v-16z"/>
                    </svg>
                    LinkedIn
                </a>

                <a href="https://github.com/NamanA24" target="_blank" rel="noreferrer" className="contact-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .5C5.65.5.5 5.64.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.92c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.77 1.04.77 2.1v3.12c0 .3.21.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.64 18.36.5 12 .5z"/>
                    </svg>
                    GitHub
                </a>
            </div>
        </section>
    );
};

export default Contact;
