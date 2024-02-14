import { DarkMode, LightModeOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import "./header.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <>
      <motion.div
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="logo parent-icon" onClick={() => setShowModal(true)}>
          <MenuIcon className="icon" />
        </div>
        <div />
        <nav>
          <ul className={`links `}>
            <li className="link">
              <a href="#about" className="active">
                About
              </a>
            </li>
            <li className="link">
              <a href="#projects">Projects</a>
            </li>
            <li className="link">
              <a href="#contact">Contat Us</a>
            </li>
          </ul>
        </nav>
        <div className="icons parent-icon">
          {theme === "dark" ? (
            <DarkMode
              onClick={() => {
                // Send value to LS
                localStorage.setItem(
                  "currentMode",
                  theme === "dark" ? "light" : "dark"
                );

                // get value from LS
                setTheme(localStorage.getItem("currentMode"));
              }}
              className="icon"
            />
          ) : (
            <LightModeOutlined
              onClick={() => {
                // Send value to LS
                localStorage.setItem(
                  "currentMode",
                  theme === "dark" ? "light" : "dark"
                );

                // get value from LS
                setTheme(localStorage.getItem("currentMode"));
              }}
              className="icon"
            />
          )}
        </div>
      </motion.div>

      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Header;
