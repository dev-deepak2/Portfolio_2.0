import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/animepfp.jpg';

import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/nodejs.png';
import springLogo from '../assets/springboot.png';
import mongoLogo from '../assets/mongoDB.png';
import htmlLogo from '../assets/html-5.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import javaLogo from '../assets/java.png';


import '../Home.css';


const Home = () => {
  const words = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer",
    "Web Developer"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 80 : 150;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentWord.length) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      } else {
        setTimeout(() => {
          setIsDeleting(!isDeleting);
          if (!isDeleting) {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }, isDeleting ? 500 : 1500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <> 
    <section id="home" className="wrapper">
      <div className="home-container-modern glass-card2">
        <div className="home-content-wrapper">
          {/* Left Text Content */}
          <motion.div
            className="home-content-modern"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <h1>Hey, I'm Deepak Kumar Sahu</h1>
            <h2>
              A professional <span className="highlighted-word">{displayedText}<span className="typing-cursor">|</span></span>
            </h2>
            <p>
            Crafting powerful web experiences with Java, JavaScript, React.js, Node.js, and Spring Boot.
            Passionate about clean code, high performance, and seamless user experiences.
            </p>
            <a
              href="/resume.pdf"
              download
              className="resume-btn global-btn"
            >
               My Resume
            </a>
          </motion.div>

          {/* Right Profile Image with Solar Orbit */}
          <div className="orbit-container-wrapper">
            <motion.div
              className="profile-img-modern"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="orbit-container">
                {/* Orbit 1 - Inner Ring */}
                <div className="orbit">
                  {[
                    { src: javaLogo, alt: 'Java' },
                    { src: nodeLogo, alt: 'Node.js' },
                    { src: springLogo, alt: 'Spring Boot' },
                    { src: mongoLogo, alt: 'MongoDB' }
                  ].map((tech, idx) => (
                    <img key={idx} src={tech.src} alt={tech.alt} className="tech-logo" />
                  ))}
                </div>

                {/* Orbit 2 - Outer Ring */}
                <div className="orbit second-ring">
                  {[
                    { src: htmlLogo, alt: 'HTML5' },
                    { src: cssLogo, alt: 'CSS3' },
                    { src: jsLogo, alt: 'JavaScript' },
                    { src: reactLogo, alt: 'React' }
                  ].map((tech, idx) => (
                    <img key={idx} src={tech.src} alt={tech.alt} className="tech-logo" />
                  ))}
                </div>

                {/* Center Profile Image */}
                <div className="center-profile">
                  <img
                    src={profileImg}
                    alt="Profile"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
