function Footer(){
    return(
        <footer>
            <div className="container-fluid text-center py-2" style={{backgroundColor:"black"}}>
                <div className="row">
                    <div className="col-12">                  
                        <div>
                            <p className="text-light my-2 h3">Tumko bad me banayenge</p>
                            <button className="btn btn-outline-light btn-sm">Let's talk</button>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-3">
                        <div>
                            <h5 className="text-info">More Info</h5>
                            <a href="/" className="d-block text-light">Blog</a>
                            <a href="/" className="d-block text-light">Home</a>
                            <a href="/" className="d-block text-light">Content</a>
                            <a href="/" className="d-block text-light">Projects</a>
                            <a href="/" className="d-block text-light">Write a recommendation <span className="fas fa-heart"></span></a>
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
                            <a href="">
                                <i className="fab fa-github d-block h4 text-light"></i>
                            </a>
                            <a href="">
                                <i className="fas fa-envelope d-block h4 text-light"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-muted">Copyrights Deepak Gupta 2020</p>
                </div>
            </div>
        </footer>
    );
}   
export default Footer;