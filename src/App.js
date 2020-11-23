import React from "react";
import "./App.css";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
import NotFound from "./Components/NotFound.js";
import ProjectPage from "./Components/ProjectPage.js";
import BlogPage from "./Components/BlogPage.js"
import AddProject from "./Components/AddProject";
import AddBlog from "./Components/AddBlog";
import HomePage from "./Components/HomePage.js";
import {Provider} from "./context.js";
import AllProject from "./Components/AllProject.js";
import AllBlogs from "./Components/AllBlogs.js";
import AddRecommendation from "./Components/AddRecommendation.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
  return(
    <Provider>
      <BrowserRouter>
        <Navbar />
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/allproject" component={AllProject} />
            <Route exact path="/allblog" component={AllBlogs}/>
            <Route exact path="addrecommendation" component={AddRecommendation} />
            <Route exact path="/addproject" component={AddProject} />
            <Route exact path ="/addblog" component={AddBlog}/>
            <Route exact path ="/addrecommendation" component={AddRecommendation}/>
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