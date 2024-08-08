import React from 'react';
import './myExperience.css';

const MyExperience = () => {
    return (
        <div className='about-body'>
            <div className="about-container">
                <h1 className='about-heading'>About ME</h1>
                <p className="about-text">
                    With a strong background in Node.js and React.js, I have 5 years of experience as a software developer. My skills include developing microservice APIs and full-stack applications with the MERN stack. I am proficient in deploying applications on AWS and using Git for version control to ensure smooth development workflows.
                </p>

                <div className="experience-education-container">
                    <div className="education-section">
                        <h2 className="section-heading">Education</h2>
                        <p><strong>Computer Science (BE)</strong>, Sanjivani College of Engineering, Kopargaon</p>
                        <p>July 2015 - July 2019 | CGPA: 7.52</p>
                        <p><strong>Class 12 (Science)</strong>, S.S.G.M College, Kopargaon</p>
                        <p>July 2014 - May 2015 | Score: 76%</p>
                    </div>
                    <div className="work-experience-section">
                        <h2 className="section-heading">Work Experience</h2>
                        <div className="experience">
                            <h3>Software Developer at Bruviti K2 Technosoft, Pune</h3>
                            <p>Sep 2021 – Current</p>
                            <p>Developed Customer Assist Chatbots.</p>
                        </div>
                        <div className="experience">
                            <h3>Software Engineer at GoodWorkLabs, Bangalore</h3>
                            <p>Sep 2021 – Jan 2023</p>
                            <p>Worked on Mahindra First Choice’s platform, focusing on optimizing React.js components and improving load times by 50%. Also developed Test-Rocket, a quiz and coding test platform.</p>
                        </div>
                        <div className="experience">
                            <h3>Software Engineer at Infosys, Pune</h3>
                            <p>Dec 2019 – Sep 2021</p>
                            <p>Developed a frontend for an internal social media application and worked on a document management portal for Northern Trust using React.js and Node.js.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyExperience;
