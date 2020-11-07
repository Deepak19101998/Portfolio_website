import React, { Component } from "react";

class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-md bg-white">
        <div className="container-fluid my-2 bg-white">
            <a href="/" className="navbar-brand text-dark font-weight-bold">
                Deepak
            </a>
            <button className="btn btn-outline-info ml-auto">
                Contact Us
            </button>
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
                    <a href="/" className="nav-link text-dark">Blog 5</a>
                    <a href="/" className="nav-link text-dark">Blog 6</a>
            </div>
        </div>
    </nav>  
    );
 }
}

export default Navbar;