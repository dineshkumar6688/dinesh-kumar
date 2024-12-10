import React from "react";
// import ibm from "../../assets/ibm.png";
// import infy from "../../assets/Infosys.png";
import "./certificate.css";
import { motion } from "framer-motion";

const Certificate = () => {
  const certificateVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
    hidden: { opacity: 0, scale: 0.5 },
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
    <div id="certificates">
      {/* <div className="certificate">
        <motion.h2
          variants={certificateVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-5 mb-4 certificate-title"
        >
          CERTIFICATES
        </motion.h2>
        <motion.div
          variants={horizantalLineVariants}
          initial="hidden"
          whileInView="visible"
          class="horizontal-line"
        ></motion.div>
        <div className="row">
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top"
                alt="Applied Data Science Capstone"
              />

              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">Applied Data Science Capstone</h5>
                  <span>Issued June 19, 2022</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/QGP2RZBZYTZS?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">Data Analysis with Python</h5>
                  <span>Issued June 19, 2022</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/NAYDBDHP3WXR?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />

              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">Data Visualization with Python</h5>
                  <span>Issued June 22, 2022</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/H2HQ9BVJKQH3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">
                    Databases and SQL for Data Science with Python
                  </h5>
                  <span>Issued June 18, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/XGSUQ69QWQZY?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">Machine Learning with Python</h5>
                  <span>Issued June 22, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/JRZBVUVTRRJD?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">
                    Python Project for Data Science
                  </h5>
                  <span>Issued June 18, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/BT4UKDQFURV8?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">
                    Python for Data Science, AI & Development
                  </h5>
                  <span>Issued June 13, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/Z7M5F5N8U6GN?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Applied Data Science Capstone"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">Tools for Data Science</h5>
                  <span>Issued May 23, 2022</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/certificate/9HGPUELSSJS7?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={ibm}
                class="card-img-top "
                alt="Data Science Foundation Certificate"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">
                    Data Science Foundation Certificate
                  </h5>
                  <span>Issued May 5th, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1-G7sFv5t5ykBO3JY3LzS2jA19DFYU8h9/view"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={infy}
                class="card-img-top "
                alt="Data Science Methodology"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">Data Science Methodology</h5>
                  <span>Issued May 19, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/B3SX3E3C7ZRW"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img src={ibm} class="card-img-top " alt="What is Data Science" />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">What is Data Science</h5>
                  <span>Issued May 19, 2022</span>
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://www.coursera.org/account/accomplishments/verify/RCBFEGSN2UUB"
                    class="mt-2 certificate-btn btn btn-warning my-1"
                  >
                    Show Credentials
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={certificateVariants}
            initial="hidden"
            whileInView="visible"
            className="col col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <div class="card certificate-card">
              <img
                src={infy}
                class="card-img-top "
                alt="Python Programmer Certification"
              />
              <div className="certificate-details">
                <div>
                  <h5 class="card-text mb-2">
                    Python Programmer Certification
                  </h5>
                  <span>Issued May 2022</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default Certificate;
