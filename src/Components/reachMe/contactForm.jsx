import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://send-mail-beta.vercel.app/api/send-mail/', {
                method: 'POST',
                mode: 'no-cors', // No CORS mode
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('Thanks');
            }
        } catch (error) {
            alert('Thank You For Contacting');
        }
    };

    return (
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Me</h2>
                <p>I would love to hear from you. Feel free to connect with me.</p>

                <div className="name-group">
                    <div className="form-group">
                        <label>First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message here"
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
