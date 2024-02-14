import React from "react";
import "./modal.css";
import { Close } from "@mui/icons-material";
const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="wrapper">
        <Close className="close" onClick={() => setShowModal(false)} />
        <nav>
          <ul className="links">
            <li className="link">
              <a href="/" className="active">
                About
              </a>
            </li>
            <li className="link">
              <a href="/">Articals</a>
            </li>
            <li className="link">
              <a href="/">Projects</a>
            </li>
            <li className="link">
              <a href="/">Speaking</a>
            </li>

            <li className="link ">
              <a href="/">Uses</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Modal;
