import React from "react";
import {
  CheckCircleOutline,
  GitHub,
  LinkedIn,
  Message,
} from "@mui/icons-material";
import "./footer.css";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer>
      <p>
        © 2024 | <b>Omar Ayman.</b>
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="media"
      >
        {[
          { icon: Message, url: "mailto:oa10003000@gmail.com" },
          { icon: GitHub, url: "https://github.com/Omar1Ayman" },
          { icon: LinkedIn, url: "https://www.linkedin.com/in/omaraymanrezk" },
        ].map((social, index) => (
          <motion.div key={index} className="icon-container">
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <social.icon className="icon-media" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </footer>
  );
};

export default Footer;
