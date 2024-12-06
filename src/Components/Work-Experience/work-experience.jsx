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
                <li class="timeline-inverted animate-box">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">Chief Technology Officer</h3>
                      <span class="company">
                        Persist Ventures - Apr 2024 - Present
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Full Time</p>
                    </div>
                  </div>
                </li>
                <li class="animate-box timeline-unverted">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">CTO @FacesearchAI</h3>
                      <span class="company">
                        Persist Ventures - Nov 2023 - Present
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>FullTime</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted animate-box">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">Full Stack Engineer</h3>
                      <span class="company">
                        Persist Ventures - Oct 2023 - Present
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Full Time</p>
                    </div>
                  </div>
                </li>
                <li class="animate-box timeline-unverted">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">AI Software Developer</h3>
                      <span class="company">
                        HeyDaw Technologies - Aug 2023 - Oct 2023
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Internship</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted animate-box">
                  <div class="timeline-badge">
                    <i class="fa-solid fa-suitcase"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h3 class="timeline-title">Software Engineer</h3>
                      <span class="company">
                        Telaverge Communications - May 2022 - Apr 2023
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Internship</p>
                    </div>
                  </div>
                </li>

                <br />
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
                      <h3 class="timeline-title">Graduation</h3>
                      <span class="company">
                        Dr. A.P.J Abdul kalam Technical University
                      </span>
                    </div>
                    <div class="timeline-body">
                      <p>Bachelor of Technology - B.Tech, Computer Science</p>
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
