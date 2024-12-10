import React from "react";
import "./work-experience.css";
import { motion } from "framer-motion";

const WorkExperiences = () => {
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
    <div>
      <div id="experiences">
        <div class="container">
          <div class="text-center mt-5">
            <h2>My Resume</h2>
          </div>
          <motion.div
            variants={horizantalLineVariants}
            initial="hidden"
            whileInView="visible"
            class="horizontal-line"
          ></motion.div>
          <div class="row">
            <div class="col-md-12 col-md-offset-0">
              <ul class="timeline">
                <li class="timeline-heading text-center animate-box">
                  <div>
                    <h3>Work Experience</h3>
                  </div>
                </li>

                <li class="animate-box timeline-unverted">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">Platform Engineer</h3>
                      <span class="company">
                        Invisibl Cloud - Jul 2022 - May 2023
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Developed API’s for major cloud services such as Azure,
                        AWS, and GCP and multiple UI components for the Gravity
                        platform using ReactJS.
                      </p>
                    </div>
                  </div>
                </li>

                <br />
                <li class="timeline-heading text-center animate-box">
                  <div>
                    <h3>Internship</h3>
                  </div>
                </li>

                <li class="timeline-inverted animate-box">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">Backend API Developer</h3>
                      <span class="company">
                        Invisibl Cloud - Feb 2022 - Jun 2022
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Developed API for AWS cloud services using Golang.</p>
                    </div>
                  </div>
                </li>

                <li class="animate-box timeline-unverted">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title"> Backend Developer</h3>
                      <span class="company">
                        Credence Analytics - Jul 2020 - Dec 2020
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Worked on Integrated Treasury Management System</p>
                      <p>Developed using NodeJS and VueJS</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-heading text-center animate-box">
                  <div>
                    <h3>Education</h3>
                  </div>
                </li>
                <li class="animate-box timeline-unverted">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">
                        Msc, Information Technology
                      </h3>
                      <h3 class="timeline-title">5 years Integrated</h3>
                      <span class="company">Anna University, CEG</span>
                    </div>
                    <div class="timeline-body">
                      <p>Completion Percentage: 7.90</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted animate-box">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">HSC</h3>
                      <span class="company">Velammal, Mogappair</span>
                    </div>
                    <div class="timeline-body">
                      <p>Completion Percentage: 92.90%</p>
                    </div>
                  </div>
                </li>

                <li class="animate-box timeline-unverted">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">SSLC</h3>
                      <span class="company">Nazareth, Avadi</span>
                    </div>
                    <div class="timeline-body">
                      <p>Completion Percentage: 94.80%</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
