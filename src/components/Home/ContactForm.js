import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/send', formData)
            .then((response) => {
                alert('Message sent successfully');
            })
            .catch((error) => {
                alert('Failed to send message');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
