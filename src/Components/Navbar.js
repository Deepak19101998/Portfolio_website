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
            <button
            className="navbar-toggler"
            data-target="#collapse"
            data-toggle="collapse"
            >
            <span className="fas fa-bars text-dark"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="collapse">
                    <Link to="/addproject" className="nav-link text-dark">Add Project</Link>
                    <Link to="/addblog" className="nav-link text-dark">Add Blog</Link>
                    <Link to="/addrecommendation" className="nav-link text-dark">Add Reccom.</Link>
            </div>
        </div>
    </nav>  
    );
 }
}

export default Navbar;