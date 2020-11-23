import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div className="container-fluid text-center py-2" style={{backgroundColor:"black"}}>
                <div className="row">
                    <div className="col-12">                  
                        <div>
                            <p className="text-light my-2 h3">Intersted in working with me?</p>
                            <Link to="/contact">
                                <button className="btn btn-outline-light btn-sm">Let's talk</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-3">
                        <div>
                            <h5 className="text-info">More Info</h5>
                            <Link to="/blog" className="d-block text-light">Blog</Link>
                            <Link to="/" className="d-block text-light">Home</Link>
                            <Link to="/contact" className="d-block text-light">Contact</Link>
                            <Link to="/project" className="d-block text-light">Projects</Link>
                            <Link to="/write-a-recommendation" className="d-block text-light">Write a recommendation <span className="fas fa-heart"></span></Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2">
                        <div className="text-light">
                            <p className="text-justify">
                                This is the second column second row of the container-fluid 
                                class which has the classes col-12, col-md-4, text-justify 
                                and text-light. After this column we will define one more 
                                columnn which is for social media icons. And after completion 
                                this row we will create one more row for the copywrite content.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div>
                            <h5 className="text-info">Social</h5>
                            <a href="/">
                                <i className="fab fa-linkedin d-block h4 text-light"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-github d-block h4 text-light"></i>
                            </a>
                            <a href="/">
                                <i className="fas fa-envelope d-block h4 text-light"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-muted">Copyrights Deepak Gupta 2k20</p>
                </div>
            </div>
        </footer>
    );
}   
export default Footer;