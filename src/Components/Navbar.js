import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-md bg-white">
        <div className="container-fluid my-2 bg-white">
            <Link to="/" className="navbar-brand text-dark font-weight-bold">
                Deepak
            </Link>
            <Link to="/contact" className="ml-auto">
                <button className="btn btn-dark">
                    Contact Us
                </button>
            </Link>
            <Link to="/addproject" className="mx-lg-3 mx-2">
                <button className="btn btn-dark">
                    Add Project
                </button>
            </Link>
            <button
            className="navbar-toggler"
            data-target="#collapse"
            data-toggle="collapse"
            >
            <span className="fas fa-bars text-dark"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="collapse">
                    <Link to="/project" className="nav-link text-dark">Project</Link>
                    <Link to="/blog" className="nav-link text-dark">Blog</Link>
                    <Link to="/allblog" className="nav-link text-dark">All Blogs</Link>
                    <Link to="/allproject" className="nav-link text-dark">All Project</Link>
            </div>
        </div>
    </nav>  
    );
 }
}

export default Navbar;