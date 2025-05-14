import React from 'react';
import { motion } from 'framer-motion';
import '../Projects.css';

const projectsData = [
  {
    name: 'Shop Vista',
    tagline: 'A sleek e-commerce platform',
    image: '../project1.png',
    github: 'https://github.com/dev-deepak2/shopvista',
  },
  {
    name: 'CaptionGram',
    tagline: 'AI-powered caption generator',
    image: '../project2.png',
    github: 'https://github.com/dev-deepak2/captiongram',
  },
  {
    name: 'Todo App',
    tagline: 'Manage your tasks efficiently',
    image: '../project3.png',
    github: 'https://github.com/dev-deepak2/todo-app',
  },
];

// Container slides up + fade
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

// Card slides up + fade, same delay as wrapper
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

// Text animation for title
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



const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1
          className="projects-title"
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {'My Projects'.split('').map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card-wrapper"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.div
                className="project-card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p>{project.tagline}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h6v2H9v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
