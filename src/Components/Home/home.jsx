import React from "react";
import myCto from "../../assets/cto.png";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="home" id="home">
          <div className="details-section mt-4 mt-md-2">
            <div className="row">
              <div className="col-md-6 mt-sm-4 d-flex align-items-center">
                <motion.div
                  initial={{ x: "-100vh" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="details"
                >
                  <div className="row">
                    <h1>
                      I'M <span className="title">Bhavya Bansal</span>
                    </h1>
                  </div>
                  <div className="row mb-4">
                    <h2>Chief Technology Officer</h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="home-btn btn btn-warning mb-3"
                  >
                    <strong>
                      <a href="#contact">Contact Me</a>
                    </strong>
                  </motion.button>
                </motion.div>
              </div>

              <motion.div
                initial={{ x: "100vh" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="col-md-6"
              >
                <img width="100%" src={myCto} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
