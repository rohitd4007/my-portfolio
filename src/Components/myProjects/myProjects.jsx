import React from 'react';
import './myProject.css'
import pr1 from '../../Resource/pr1.png';
import pr121 from '../../Resource/pr121.png';
import pr122 from '../../Resource/pr122.png'
import pr123 from '../../Resource/pr123.png'

const projectsData = [
    {
        id: 1,
        name: "Tee Flect",
        description: "A e-commerce application for T-shirts",
        image: pr123,
        alt: "tee-flect-app",
        link: "https://tee-flect.netlify.app/"
    },
    {
        id: 2,
        name: "My Portfolio",
        description: "A Web application to showcase my skills & recent work",
        image: pr121,
        alt: "Project 2",
        link: "https://rohit-devhare-portfolio.netlify.app/"
    },
    {
        id: 3,
        name: "Quiz Application",
        description: "A quiz application to test your knowledge of Computer Science concepts.",
        image: pr1,
        alt: "Test Your CS",
        link: "https://test-you-cs.netlify.app/"
    },
    {
        id: 4,
        name: "Chat-Bot Application",
        description: "Chatbot Application for Covid Related Queries",
        image: pr122,
        alt: "Project 3",
        link: "https://rohitd4007.github.io/covid-chat-bot/"
    }
];

const ctaData = {
    message: "Find a more extensive collection of my projects and their source code on my GitHub!",
    link: "https://github.com/rohitd4007",
    linkText: "Visit My GitHub Profile"
};

const MyProjects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-heading">My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.alt} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link">View Project</a>
                    </div>
                ))}
            </div>
            <div className="github-cta">
                <p className="github-message">{ctaData.message}</p>
                <a href={ctaData.link} target="_blank" rel="noopener noreferrer" className="github-link">
                    {ctaData.linkText}
                </a>
            </div>
        </div>
    );
};

export default MyProjects;
