import React from "react";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const navbarVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: { y: "-100vh" },
  };

  return (
    <div id="top">
      <nav className="navbar fixed-top navbar-expand-lg  custom-navbar">
        <div className="container-fluid">
          <motion.a
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ color: "white" }}
            className="navbar-brand"
            href="#home"
          >
            Bhavya Bansal
          </motion.a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <motion.div
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className="collapse navbar-collapse"
            id="navbarText"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certificates">
                  Certificates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experiences">
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
