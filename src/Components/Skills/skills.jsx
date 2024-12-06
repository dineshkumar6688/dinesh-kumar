import React from "react";
import dataanalytics from "../../assets/data-analytics.png";
import chatgpt from "../../assets/chatgpt.png";
import nlp from "../../assets/nlp.png";
import swagger from "../../assets/swagger.png";
import k8s from "../../assets/kubernetes.png";
import docker from "../../assets/docker.png";
import jenkins from "../../assets/jenkins.png";
import azure from "../../assets/azure.png";
import mongodb from "../../assets/mongodb.png";
import linux from "../../assets/linux.png";
import python from "../../assets/python.png";
import c from "../../assets/c.png";
import cplus from "../../assets/c++.png";
import sql from "../../assets/sql.png";
import "./skills.css";
import { motion } from "framer-motion";

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
                <img src={nlp} width="100" alt="nlp" />
                <span className="skill-name">Natural Language Processing</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={swagger} width="100" alt="swagger" />
                <span>Swagger</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={k8s} width="100" alt="k8s" />
                <span>Kubernetes</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={docker} width="100" alt="docker" />
                <span>Docker</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={jenkins} width="100" alt="jenkins" />
                <span>Jenkins</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={azure} width="100" alt="azure" />
                <span>Azure</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={mongodb} width="100" alt="mongodb" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={linux} width="100" alt="linux" />
                <span>Linux</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={python} width="100" alt="python" />
                <span>Python</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={c} width="100" alt="c" />
                <span>C</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={cplus} width="100" alt="c++" />
                <span>C++</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={sql} width="100" alt="sql" />
                <span>SQL</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={chatgpt} width="100" alt="chatgpt" />
                <span>ChatGPT</span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3 my-1">
            <div className="skills-card card">
              <div className="card-body">
                <img src={dataanalytics} width="100" alt="dataanalytics" />
                <span>Data Analytics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
