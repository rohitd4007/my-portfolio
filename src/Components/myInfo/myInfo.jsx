// src/MyInfo.js
import React from 'react';
import './myInfo.css';

const MyInfo = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/14EXe-o9yfhyPH4mnAUw-hO-ZHLeiz4L-/view?usp=sharing'; // Replace with your actual resume link
        link.download = 'My_Resume.pdf'; // 
        link.click();
    };

    return (
        <div className="info-container">
            <div className="text-content">
                <h1 className="greeting">Hello World! <div className='greeting-name'><div>I’m  </div>Rohit Devhare</div></h1>
                <p className="description">a passionate software developer  specializing in </p>
                <p className="description">the <span className='name-topic'>MERN</span> Stack </p>
            </div>
            <button className="download-button" onClick={handleDownload}>Download My Resume</button>
        </div>
    );
};

export default MyInfo;
