// src/MyHeader.js
import React, { useState } from 'react';
import './myHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


const MyHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className='my-logo'>RD</div>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#home">Home</a></li>
                    <li className="navbar-item"><a href="#about">About</a></li>
                    <li className="navbar-item"><a href="#projects">Projects</a></li>
                    <li className="navbar-item"><a href="#articles">Articles</a></li>
                    <li className="navbar-item"><a href="#skills">Skills</a></li>
                    <li className="navbar-item"><a href="#contact">Contact Me</a></li>
                </ul>
                <button className="menu-toggle" onClick={toggleSidebar}>
                    ☰
                </button>
            </nav>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <a href="https://in.linkedin.com/in/rohitdevhare07" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/rohit_devhare_07_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://x.com/rohit_devhare" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="https://github.com/rohitd4007" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-item"><a href="#home" onClick={toggleSidebar}>Home</a></li>
                    <li className="sidebar-item"><a href="#about" onClick={toggleSidebar}>About</a></li>
                    <li className="sidebar-item"><a href="#projects" onClick={toggleSidebar}>Projects</a></li>
                    <li className="sidebar-item"><a href="#articles" onClick={toggleSidebar}>Articles</a></li>
                    <li className="sidebar-item"><a href="#skills" onClick={toggleSidebar}>Skills</a></li>
                    <li className="sidebar-item"><a href="#contact" onClick={toggleSidebar}>Contact Me</a></li>
                </ul>
            </div >
            <div className={`backdrop ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
        </>
    );
};

export default MyHeader;
