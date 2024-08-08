import React from 'react';
import './myProject.css'
import pr1 from '../../Resource/pr1.png';
import csoon from '../../Resource/csoon.avif'

const MyProjects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-heading">My Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src={pr1} alt="Test Your CS" className="project-image" />
                    <h3 className="project-name">Test Your CS</h3>
                    <p className="project-description">A quiz application to test your knowledge of Computer Science concepts.</p>
                    <a href="https://test-you-cs.netlify.app/" className="project-link">View Project</a>
                </div>
                <div className="project-card">
                    <img src={csoon} alt="Project 2" className="project-image" />
                    <h3 className="project-name">Project 2 Name</h3>
                    <p className="project-description">Short description for project 2.</p>
                    <a href="#project" className="project-link">View Project</a>
                </div>
                <div className="project-card">
                    <img src={csoon} alt="Project 3" className="project-image" />
                    <h3 className="project-name">Project 3 Name</h3>
                    <p className="project-description">Short description for project 3.</p>
                    <a href="#project" className="project-link">View Project</a>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
