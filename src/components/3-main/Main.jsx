import { useState } from "react";
import Card from "./Card";
import "./main.css";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Launch } from "@mui/icons-material";
const my_projects = [
  {
    id: 1,
    title: "Archive App",
    category: ["Node"],
    image: "./FB.png",
    demo: "#",
    source: "https://github.com/Omar1Ayman/",
    details: `node js app, The goal of this app was to organize the archiving process.
    Created database with MongoDB.`,
  },
  {
    id: 2,
    title: "BlogApp",
    category: ["Node"],
    image: "./mernBlog.png",
    demo: "#",
    source: "https://github.com/Omar1Ayman/",
    details: `FullStack Blog App with (mongo database , nodejs , reactjs , redux)
    you can login ,register,create new post ,update and you have your profile.`,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    category: ["React"],
    image: "./dashboard.jpg",
    demo: "https://admin-dashboard-1c9cc.web.app/",
    source: "https://github.com/Omar1Ayman/Admin-Dashboard",
    details: `Admin dashboar with react and MUI,react router`,
  },
  {
    id: 4,
    title: "Ecommerce App",
    category: ["React"],
    image: "./ecommerce.png",
    demo: "https://ecommerce-c5303.web.app/",
    source: "https://github.com/Omar1Ayman/React-e-commerce-With-Strapi",
    details: `Ecommerc app with react,mui,strapi database.`,
  },
  {
    id: 5,
    title: "The World Wise",
    category: ["React"],
    image: "./world.png",
    demo: "#",
    source: "https://github.com/Omar1Ayman/React-WorldWise",
    details: `A world map that tracks
     your footsteps into every city you can think of. Never forget your wonderful
     experiences, and show your friends how you have wandered the world.`,
  },
  {
    id: 6,
    title: "fast-react-pizza",
    category: ["React"],
    image: "./pizza.png",
    demo: "https://react-pizzaapp-8d7ed.web.app",
    source: "https://github.com/Omar1Ayman/fast-react-pizza",
    details: `Pizza App With React, you can order more Pizza`,
  },
  {
    id: 7,
    title: "FaceBookClone",
    category: ["React"],
    image: "./FB.png",
    demo: "https://facebookcloneapp-c99c6.web.app",
    source: "https://github.com/Omar1Ayman/React-FaceBookClone",
    details: `FaceBook App with react ,TwailWindCss`,
  },
  {
    id: 8,
    title: "Safari App",
    category: ["React"],
    image: "./safari.png",
    demo: "https://safariapp-27514.web.app",
    source: "https://github.com/Omar1Ayman/Safari",
    details: `Safari App with React,Css`,
  },
];

// https://safariapp-27514.web.app
const Main = () => {
  const [projects, setProjects] = useState(my_projects);
  const [currentActive, setCurrentActive] = useState("all projects");

  const handleProjects = (value = "all projects") => {
    setCurrentActive(value);
    if (value === "all projects") {
      setProjects(my_projects); // Reset to show all projects
    } else {
      const filteredProjects = my_projects.filter((item) =>
        item.category.includes(value)
      );
      setProjects(filteredProjects);
    }
  };

  return (
    <main id="projects">
      <div className="head">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="head"
        >
          PORTFOLIO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Here are best of my projects, which I coded while my learning journey.
        </motion.p>
      </div>

      <div className="body">
        <section className="main-left">
          {[
            { val: "all projects", title: "All Projects" },
            { val: "React", title: "React Projects" },
            { val: "Node", title: "Node Projects" },
          ].map((item) => {
            // Corrected the syntax here
            const { val, title } = item; // Destructuring item properly
            return (
              <Button
                variant="outlined"
                className={`btn ${currentActive === val ? "active" : ""}`}
                onClick={() => handleProjects(val)} // Passing val to handleProjects directly
              >
                {title}
              </Button>
            );
          })}
        </section>

        <sectoin className="main-right">
          {projects.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </sectoin>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          component={"a"}
          href="https://github.com/Omar1Ayman"
          target="_blanket"
          startIcon={<Launch />}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            width: "11rem",
            backgroundColor: "rgba(36, 37, 46, 1);",
          }}
        >
          Explore
        </Button>
      </div>
    </main>
  );
};

export default Main;
