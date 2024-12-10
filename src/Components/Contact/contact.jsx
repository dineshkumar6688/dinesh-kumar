import React, { useEffect, useState } from "react";
import "./contact.css";
import "../../../index.html";
import { motion } from "framer-motion";

const Contact = () => {
  const contactVariants = {
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: { scale: 0.8 },
  };

  const footerVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hidden: { opacity: 0 },
  };

  //////////////////////////
  // scroll to top
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  ////////////////////////////

  return (
    <div>
      <motion.div
        variants={contactVariants}
        initial="hidden"
        whileInView="visible"
        class="mb-5"
        id="contact"
      >
        <div class="contact-title mt-4">
          <h2 class=" title">Contact</h2>
          <h4 class="mt-3">I'D LOVE TO HEAR FROM YOU</h4>
        </div>
        <div class="row contact-details">
          <div class="col-md-3 mt-4 col-12">
            <div class="contact-icon mb-2">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="mb-2 title">WHERE TO FIND ME</div>
            <div>Chennai, Tamil Nadu, India</div>
          </div>
          <div class="col-md-3 mt-4 col-12">
            <div class="contact-icon mb-2">
              <i class="fa-solid fa-envelope-circle-check"></i>
            </div>
            <div class="mb-2 title">EMAIL</div>
            <div>dkdinesh6688@gmail.com</div>
          </div>
          <div class="col-md-3 mt-4 col-12">
            <div class="contact-icon mb-2">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="mb-2 title">PHONE</div>
            <div>+91 9677026688</div>
          </div>
          <div class="col-md-3 mt-4 col-12">
            <div class="contact-icon mb-2">
              <i class="fa-solid fa-brands fa-linkedin"></i>
            </div>
            <div class="mb-2 title">LINKEDIN</div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dinesh-kumar-a20451199"
              className="linkedin"
            >
              linkedin/dinesh-kumar-a20451199
            </a>
          </div>
        </div>
      </motion.div>
      <div>
        <div class="footer">
          <motion.span
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
          >
            DINESH KUMAR D <span className="mx-1">|</span> 2024
          </motion.span>
          {visible && (
            <div>
              <a class="toparrow" title="Back to Top" href="#top">
                <i class="fa fa-long-arrow-up"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
