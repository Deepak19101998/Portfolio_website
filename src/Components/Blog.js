import React from "react";
import BlogCard from "./BlogCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Blog(){
    return(
        <Consumer>
        {value =>{
            const {blogs} = value;
            return(
                <div className="container py-3">
                    <div className="text-center py-3">
                        <h1>My <span className="text-info">Blog</span></h1>
                        <p className="h3">I share my views on technologies in these blogs</p>
                    </div>
                    <div className="row justify-content-around text-center py-2">
                        {blogs.map((blog) =>(
                                <div key={uuid()} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
                                    <BlogCard key={uuid()} blog={blog}/>
                                </div>
                        ))
                        }
                    </div>
                    <div className="py-4">
                        <a href="/" className="text-right font-weight-light text-dark">
                            <h5>Click Here For More Blogs <span className="fas fa-arrow-right align-middle"></span></h5>
                        </a>
                    </div>
                </div>
            );
        }}
    </Consumer>
    )
    
}
export default Blog;