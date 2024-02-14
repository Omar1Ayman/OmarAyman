import React from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Footer from "./components/5-footer/Footer";
import Contact from "./components/4-contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./skills/Skills";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div className="container">
      <Cursor />
      <Header />
      <Hero />
      <div className="divider" />
      <Skills />
      <div className="divider" />

      <Main />
      <div className="divider" />
      <Contact />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
