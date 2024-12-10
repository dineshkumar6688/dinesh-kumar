import React from "react";
import { motion } from "framer-motion";
import python from "../../assets/python.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import redux from "../../assets/redux.png";
import flutter from "../../assets/flutter.png";
import mysql from "../../assets/mysql.png";
import postgres from "../../assets/postgres.png";
import mongodb from "../../assets/mongodb.png";
import github from "../../assets/github.png";
import "./skills.css";

const Skills = () => {
  const skillsVariants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.6,
      },
    },
    hidden: { opacity: 0, translateX: "-100%" },
  };

  const skillsDataVariants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1.2,
      },
    },
    hidden: { opacity: 0, translateX: "100%" },
  };

  const horizantalLineVariants = {
    visible: {
      opacity: 1,
      width: "20%",
      transition: {
        duration: 0.8,
      },
    },
    hidden: { opacity: 0, width: 0 },
  };

  return (
    <motion.div id="skills">
      <div className="skills">
        <motion.h3
          variants={skillsVariants}
          initial="hidden"
          whileInView="visible"
          className="skill-title mt-5"
        >
          SKILLS
        </motion.h3>
        <motion.div
          variants={horizantalLineVariants}
          initial="hidden"
          whileInView="visible"
          class="horizontal-line"
        ></motion.div>
        <motion.div
          variants={skillsDataVariants}
          initial="hidden"
          whileInView="visible"
          className="row"
        >
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={python} width="100" alt="python" title="python" />
                <span className="skill-name">Python</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={html} width="100" alt="html" title="html" />
                <span>HTML</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={css} width="100" alt="css" title="css" />
                <span>CSS</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={js} width="100" alt="JavaScript" title="JavaScript" />
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img
                  src={bootstrap}
                  width="100"
                  alt="BootStrap"
                  title="BootStrap"
                />
                <span>BootStrap</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={react} width="100" alt="React" title="ReactJS" />
                <span>ReactJS</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img
                  src={tailwind}
                  width="100"
                  alt="Tailwind"
                  title="Tailwind"
                />
                <span>Tailwind</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={redux} width="100" alt="Redux" title="Redux" />
                <span>Redux</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={flutter} width="100" alt="Flutter" title="Flutter" />
                <span>Flutter</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img
                  src={react}
                  width="100"
                  alt="ReactNative"
                  title="ReactNative"
                />
                <span>ReactNative</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={mysql} width="100" alt="MySQL" title="MySQL" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img
                  src={postgres}
                  width="100"
                  alt="Postgres"
                  title="Postgres"
                />
                <span>Postgres</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={mongodb} width="100" alt="MongoDB" title="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={github} width="100" alt="GitHub" title="GitHub" />
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
