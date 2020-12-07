import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-md fixed-top color-custom">
        <div className="container-fluid my-2">
            <Link to="/" className="navbar-brand text-light font-weight-bold">
                Home
            </Link>
            <Link to="/contact" className="ml-auto">
                <button className="btn btn-warning">
                    Contact Us
                </button>
            </Link>
            <button
            className="navbar-toggler"
            data-target="#collapse"
            data-toggle="collapse"
            >
            <span className="fas fa-bars text-light"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="collapse">
                    <Link to="/addproject" className="nav-link text-light font-weight-bold">Add Project</Link>
                    <Link to="/addblog" className="nav-link text-light font-weight-bold">Add Blog</Link>
                    <Link to="/addrecommendation" className="nav-link text-light font-weight-bold">Add Reccom.</Link>
            </div>
        </div>
    </nav>  
    );
 }
}

export default Navbar;