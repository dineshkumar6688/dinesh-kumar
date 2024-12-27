import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import dk from '../../assets/dk.jpg'

const About = () => {
  const aboutVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <div id="about">
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        whileInView="visible"
        className="about"
      >
        <h3 className="about-title mb-5">About Me</h3>
        <div className="row about-section">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="col-md-4 about-img mb-3 mb-md-0 col-12"
          >
            <img
              width="80%"
              src={dk}
              alt="Bhavya Bansal"
            />
          </motion.div>
          <div className="about-desc col-md-8 col-12">
            I am Dinesh Kumar. I have completed MSc in Information Technology
            from Anna University, Chennai. I has completed two internships,
            focusing on Node.js and Golang, which provided me with practical
            experience in backend development. I have worked as a Platform
            Engineer at Invisibl Cloud for a period of 1 year where I developed
            UI components using ReactJS and created APIs with Golang for cloud
            platforms such as AWS, Azure, and GCP. My experience in both
            frontend and backend technologies enables me to build robust
            applications that are efficient and scalable.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
