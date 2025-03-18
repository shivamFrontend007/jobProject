import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <h1 id='contact' className='contacth1'>------- Contact Here -------</h1>
    <form onSubmit={handleSubmit} className="contact-form">
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Your Name"
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Your Email"
      />
      <textarea 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        placeholder="Your Message"
      />
      <button type="submit">Send Message</button>
    </form>
    </>
  );
};

export default ContactForm;
