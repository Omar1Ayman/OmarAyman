import {
  CheckCircleOutline,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import devAnimation from "../../animation/dev.json";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import "./hero.css";
import { Button } from "@mui/material";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <div className="hero" id="about">
      <div className="personal">
        <motion.div
          className="img"
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ damping: 6, type: "spring", stiffness: 100 }}
        >
          <img src="./fiv.png" alt="" />
          <div className="image-title">
            <h2>Omar Ayman</h2>
            <CheckCircleOutline className="market" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="content"
        >
          <div style={{ display: "flex", gap: ".4rem" }}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="title-fixed"
            >
              I'm
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="title"
            >
              <Typewriter
                words={["Web Developer", "MERN Stack"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="about-me"
          >
            <Typewriter
              words={[
                `my name is Omar Ayman, and I am 24 years old. I graduated in 2022 from Mansoura University, where I pursued my studies in the IT department within the College of Computer and Information Systems.`,
              ]}
              cursorStyle="."
              typeSpeed={10}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </motion.p>
          {/* <Button
            sx={{ mr: 3, mt: 2, textTransform: "capitalize" }}
            variant="outlined"
          >
            more about me
          </Button> */}
          <Button
            sx={{ mt: 2, textTransform: "capitalize" }}
            variant="outlined"
            target="_blank"
            component={"a"}
            href="./Omar Ayman.pdf"
            download
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="media"
        >
          {[
            { icon: GitHub, url: "https://github.com/Omar1Ayman" },
            {
              icon: LinkedIn,
              url: "https://www.linkedin.com/in/omaraymanrezk",
            },
            { icon: WhatsApp, url: " https://wa.me/01027784288" },
            {
              icon: Facebook,
              url: "https://www.facebook.com/omar.elbasuony.9?mibextid=ZbWKwL",
            },
          ].map((social, index) => (
            <motion.div key={index} className="icon-media">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="icon" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="animate">
        <Lottie
          lottieRef={lottieRef}
          className="contact-animation"
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </div>
  );
};

export default Hero;
