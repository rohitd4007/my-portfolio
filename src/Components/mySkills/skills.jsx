import React from 'react';
import './skills.css';

const skills = [
    'React.js',
    'Node.js',
    'Next.js',
    'JavaScript',
    'MongoDB',
    'AWS',
    'Redux',
    'Express',
    'API Development'
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
