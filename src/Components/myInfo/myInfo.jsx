// src/MyInfo.js
import React, { useEffect, useState } from 'react';
import '../../App.css';
import './myInfo.css'

const roles = [
    'MERN-Stack Developer',
    'JavaScript Developer',
    'Software Developer',
    'Full Stack Developer'
];

export default function MyInfo() {
    const [displayedText, setDisplayedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        // Clean up the class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [menuOpen]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/14EXe-o9yfhyPH4mnAUw-hO-ZHLeiz4L-/view?usp=sharing'; // Replace with your actual resume link
        link.download = 'My_Resume.pdf'; // 
        link.click();
    };

    useEffect(() => {
        const currentRole = roles[roleIndex];
        if (charIndex < currentRole.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentRole[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }, 2000);
            return () => clearTimeout(pause);
        }
    }, [charIndex, roleIndex]);

    return (
        <div className="hero-section">
            <nav className="navbar">
                <div className='my-logo'>RD</div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
                <ul className={menuOpen ? 'open' : ''}>
                    <li onClick={() => setMenuOpen(false)}> <a href="#home"> Home </a></li>
                    <li onClick={() => setMenuOpen(false)}> <a href="#about"> About </a></li>
                    <li onClick={() => setMenuOpen(false)}> <a href="#projects">Projects </a></li>
                    <li onClick={() => setMenuOpen(false)}> <a href="#articles">Articles </a></li>
                    <li onClick={() => setMenuOpen(false)}> <a href="#skills">Skills </a></li>
                    <li onClick={() => setMenuOpen(false)}> <a href="#contact">Contact </a></li>
                </ul>
            </nav>
            {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />}

            <div className="container">
                {/* <div className="avatar">RD</div> */}
                <div className="intro-text">
                    <p className="hello">Hello,</p>
                    <h1 className="name">
                        I'M <span className="gradient">ROHIT DEVHARE</span>
                    </h1>
                    <p className="tagline">
                        <span className="typing">{displayedText}</span>
                        <span className="cursor">|</span>
                    </p>
                    <button className="resume-button" onClick={() => handleDownload()}>Download My Resume</button>
                </div>
            </div>
        </div >
    );
}
