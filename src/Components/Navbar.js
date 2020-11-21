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
            <Link to="/add/project" className="mx-lg-3 mx-2">
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
                    <a href="/" className="nav-link text-dark">Blog 1</a>
                    <a href="/" className="nav-link text-dark">Blog 2</a>
                    <a href="/" className="nav-link text-dark">Blog 3</a>
                    <a href="/" className="nav-link text-dark">Blog 4</a>
            </div>
        </div>
    </nav>  
    );
 }
}

export default Navbar;