import React from "react";
import About from "./Components/About.js";
import Blog from "./Components/Blog.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
import Project from "./Components/Project.js";
import Recommendation from "./Components/Recommendation.js";
import Technology from "./Components/Technology.js";
import Title from "./Components/Title.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from "./Components/NotFound.js";
import ProjectPage from "./Components/ProjectPage.js";

function App(){
  return(
    <BrowserRouter>
      <Navbar />
        <Switch>

          <Route exact path="/">
            <Title/>
            <Recommendation />
            <Technology />
            <Project />
            <About />
            <Blog />
          </Route>

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/project" component={Project}/>
          <Route exact path="/projectpage/:id" component={ProjectPage}/>
          <Route component={NotFound}/>

        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;