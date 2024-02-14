import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        sx={{ position: "fixed", right: 22, bottom: 22 }}
        color="primary"
        size="small"
        variant="circular"
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
