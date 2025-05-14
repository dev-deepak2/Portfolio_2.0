import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../Contact.css';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
          formRef.current.reset();
      }, (error) => {
          console.log('Email error:', error.text);
          alert('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1>Get in touch</h1>
        <p>Do you have a project in your mind, contact me here...</p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Form */}
        <motion.form 
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
          <div className="form-row">
            <input type="text" name="user_name" placeholder="Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">
            Send <FaPaperPlane className="send-icon" />
          </button>

          <div className="contact-buttons">
            <motion.a 
              href="mailto:sahud8115@gmail.com" 
              className="contact-btn global-btn"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <FaEnvelope /> Gmail
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/dk-sahu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn global-btn"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>

            <motion.a 
              href="https://github.com/dev-deepak2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn global-btn"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <FaGithub /> GitHub
            </motion.a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
