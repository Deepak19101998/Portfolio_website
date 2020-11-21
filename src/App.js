import React from "react";
import Blog from "./Components/Blog.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
import Project from "./Components/Project.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from "./Components/NotFound.js";
import ProjectPage from "./Components/ProjectPage.js";
import BlogPage from "./Components/BlogPage.js"
import AddProject from "./Components/AddProject";
import HomePage from "./Components/HomePage.js";
import {Provider} from "./context.js"

function App(){
  return(
    <Provider>
      <BrowserRouter>
        <Navbar />
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/project" component={Project}/>
            <Route exact path="/add/project" component={AddProject} />
            <Route exact path="/projectpage/:id" component={ProjectPage}/>
            <Route exact path="/blogpage/:id" component={BlogPage}/>
            <Route component={NotFound}/>

          </Switch>
        <Footer />  
      </BrowserRouter>
    </Provider>
  );
}

export default App;