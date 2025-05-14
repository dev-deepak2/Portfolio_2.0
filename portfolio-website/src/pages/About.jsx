import React from 'react';
import { motion } from 'framer-motion';
import '../About.css';

const About = () => {
  // Variants for animations
  const introVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const skillsVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };


  //Text animation for title
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9, // Added delay before starting the stagger
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

  return (
    <section className="about-section" id="about">
      
      <motion.h2
        className="about-title"
        variants={sentence}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
          >
        {'About me'.split('').map((char, index) => (
                    <motion.span key={index} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>

        <div className="about-content">
          {/* About Intro - Slide in from the left */}
          <motion.div
            className="about-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger when 10% of the element is in view
            variants={introVariants}
          >
            <h2>My Introduction</h2>
            <p>
              I am a passionate software developer skilled in both frontend and backend technologies. 
              I enjoy creating responsive, interactive, and scalable applications.
               I thrive in collaborative environments and am always eager to learn new technologies and improve my skills.
            </p>
            <a href="#contact">
            <button className="global-btn c-btn">Contact Me</button>
            </a>
          </motion.div>

          {/* About Skills - Slide in from the right */}
          <motion.div
            className="about-skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Trigger when 10% of the element is in view
            variants={skillsVariants}
          >
            <div className="skill-group wide-group">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JS</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Vite</span>
                  </div>
            </div>

            <div className="skill-group">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Hibernate</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">JDBC</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Oracle</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
          </motion.div>
        </div>
      
    </section>
  );
};

export default About;