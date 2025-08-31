import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS, Formspree, or other service
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thanks for reaching out! I will get back to you soon.</p>;
  }

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: '2rem 0' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{ padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#282c34', color: 'white', border: 'none' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
