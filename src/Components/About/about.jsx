import React from "react";
import "./about.css";
import { motion } from "framer-motion";

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
              src="https://media.licdn.com/dms/image/v2/D5603AQE1zhvoksEtgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723828613838?e=1737590400&v=beta&t=CTOg_uNReDV7Hyyd5lsHM7JC4W0I-Urg46CUJvOpXRs"
              alt="Bhavya Bansal"
            />
          </motion.div>
          <div className="about-desc col-md-8 col-12">
            Bhavya Bansal embodies the qualities of a versatile and
            forward-thinking professional in the tech industry. With expertise
            spanning programming languages, machine learning, data analysis,
            DevOps practices, and full-stack development, Bhavya is
            well-equipped to tackle the challenges posed by today's rapidly
            evolving technological landscape. As organizations increasingly rely
            on innovative software solutions to drive growth and efficiency,
            professionals like Bhavya will play a pivotal role in shaping the
            future of technology through their contributions to artificial
            intelligence and beyond. With a commitment to continuous learning
            and adaptation, Bhavya is poised to make significant impacts in the
            field of software engineering.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
