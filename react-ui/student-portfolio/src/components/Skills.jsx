import React from 'react';
import WindowBar from './WindowBar';

const Skills = () => {
    return (
        <div className="card">
            <WindowBar />
            <h2>Skills</h2>

            <div className="skills-group">
                <h4>Programming</h4>
                <div class="chips">
                    <span>C++</span><span>Python</span><span>Java</span><span>SQL</span>
                </div>
            </div>

            <div className="skills-group">
                <h4>Web & Cloud</h4>
                <div class="chips">
                    <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>AWS</span>
                </div>
            </div>

            <div className="skills-group">
                <h4>AI / Data</h4>
                <div class="chips">
                    <span>Machine Learning</span><span>Random Forest</span><span>SHAP</span>
                </div>
            </div>

            <div className="skills-group">
                <h4>Tools</h4>
                <div class="chips">
                    <span>Git</span><span>Linux</span><span>VS Code</span><span>Raspberry Pi</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
