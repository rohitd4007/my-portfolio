import React from 'react';
import './myProject.css'
import pr1 from '../../Resource/pr1.png';
import pr121 from '../../Resource/pr121.png';
import pr122 from '../../Resource/pr122.png'

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
                    <img src={pr121} alt="Project 2" className="project-image" />
                    <h3 className="project-name">My Portfolio</h3>
                    <p className="project-description">A Web application to showcase my skills & recent work</p>
                    <a href="https://rohit-devhare-portfolio.netlify.app/" className="project-link">View Project</a>
                </div>
                <div className="project-card">
                    <img src={pr122} alt="Project 3" className="project-image" />
                    <h3 className="project-name">Chat-Bot For Covid FAQ</h3>
                    <p className="project-description">Chatbot Application for Covid Related Queries</p>
                    <a href="https://rohitd4007.github.io/covid-chat-bot/" className="project-link">View Project</a>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
