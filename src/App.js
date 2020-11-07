import React from "react";
import About from "./Components/About.js";
import Blog from "./Components/Blog.js";
import Skill from "./Components/Skill.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
import Project from "./Components/Project.js";
import Technology from "./Components/Technology.js";
import Title from "./Components/Title.js";

function App(){
  return(
    <div>
      <Navbar />
      <Title/>
      <Skill/>
      <Technology />
      <Project />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;