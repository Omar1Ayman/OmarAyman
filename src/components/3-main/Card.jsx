import { ArrowForward, GitHub, Link } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <AnimatePresence />
      <motion.div
        layout
        initial={{ transform: "scale(0.4)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", damping: 8, stiffness: 50 }}
        className="card"
      >
        <div className="img-card">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <h3 className="title">{item.title}</h3>
          <p className="subtitle">{item.details}</p>
          <div className="links">
            <Tooltip title="demo">
              <IconButton
                component={"a"}
                target="_blank"
                href={item.demo}
                sx={{ color: "var(--subtitle)" }}
              >
                <Link sx={{ fontSize: "48px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="github">
              <IconButton
                component={"a"}
                target="_blank"
                href={item.source}
                sx={{ color: "var(--subtitle)" }}
                size="large"
              >
                <GitHub sx={{ fontSize: "48px" }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
