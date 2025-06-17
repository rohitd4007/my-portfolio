import React from 'react';
import './myArticles.css';

export default function MyArticles() {
    return (
        <section className="coming-soon-section">
            <div className="coming-soon-container">
                <h2 className="coming-soon-title">Articles</h2>
                <p className="coming-soon-message">Insightful articles are on your ways. Stay tuned!</p>
                <div className="loading-spinner"></div>
            </div>
        </section>
    );
} 