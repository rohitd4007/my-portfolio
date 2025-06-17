import React, { useState } from 'react';
import './myExperience.css';

const dummyImage = '/dummy pfp.avif';

const cards = [
    {
        type: 'intro',
        title: 'Rohit Devhare',
        subtitle: '5+ Years MERN & Node.js',
        image: dummyImage
    },
    {
        type: 'education',
        entries: [
            { icon: '🎓', title: 'Computer Science (BE)', institution: 'Sanjivani College', dates: '2015 - 2019' },
            { icon: '🎓', title: 'Class 12 (Science)', institution: 'SSGM College', dates: '2014 - 2015' },
            { icon: '🎓', title: 'Class 10', institution: 'XYZ School', dates: '2012 - 2014' }
        ]
    },
    {
        type: 'experience',
        entries: [
            { icon: '💼', title: 'Software Developer', company: 'Bruviti K2', dates: '2021 - Present', desc: 'Customer assist chatbots' },
            { icon: '💼', title: 'Software Engineer', company: 'GoodWorkLabs', dates: '2021 - 2023', desc: 'Quiz & coding platform' },
            { icon: '💼', title: 'Software Engineer', company: 'Infosys', dates: '2019 - 2021', desc: 'Document management portal' }
        ]
    },
    {
        type: 'skills',
        skills: [
            { label: 'React', level: 80 },
            { label: 'Node', level: 75 },
            { label: 'AWS', level: 60 },
            { label: 'Docker', level: 50 }
        ]
    }
];

export default function MyExperience() {
    const [index, setIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCards = 4;

    const handleNext = () => {
        if (currentIndex < totalCards - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
    const next = () => setIndex((i) => (i + 1) % cards.length);

    return (
        <section className="about-carousel">
            <div className='secton-container'>
                <button className="arrow left" onClick={handlePrev}>&larr;</button>
                <h2 className="section-title">ABOUT ME</h2>
                <button className="arrow right" onClick={handleNext}>&rarr;</button>
            </div>
            <div className="carousel-container">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className={`card ${i === index ? 'active' : ''}`}
                    >
                        {card.type === 'intro' && (
                            <div className="intro-card">
                                <img src={card.image} alt="profile" />
                                <h3>{card.title}</h3>
                                <p>{card.subtitle}</p>
                            </div>
                        )}
                        {card.type === 'education' && (
                            <div className="edu-card">
                                <h3>Education</h3>
                                {card.entries.map((e, idx) => (
                                    <div key={idx} className="edu-entry">
                                        <span className="icon">{e.icon}</span>
                                        <div>
                                            <strong>{e.title}</strong>
                                            <p>{e.institution}</p>
                                            <span>{e.dates}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {card.type === 'experience' && (
                            <div className="exp-card">
                                <h3>Work Experience</h3>
                                {card.entries.map((e, idx) => (
                                    <div key={idx} className="exp-entry">
                                        <span className="icon">{e.icon}</span>
                                        <div>
                                            <strong>{e.title} at {e.company}</strong>
                                            <span>{e.dates}</span>
                                            <p>{e.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {card.type === 'skills' && (
                            <div className="skills-card">
                                <h3>Skills</h3>
                                <div className="skill-map">
                                    {card.skills.map((s, idx) => (
                                        <div key={idx} className="skill-entry">
                                            <span>{s.label}</span>
                                            <div className="bar">
                                                <div className="fill" style={{ width: `${s.level}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
