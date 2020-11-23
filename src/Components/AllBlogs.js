import React from "react";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
import BlogCard from "./BlogCard.js"

function AllBlogs(){
    return(
        <Consumer>
            {(value)=>{
                const {blogs} = value;
                return(
                    <div className="container py-2 my-2">
                        <div className="text-center py-3">
                            <p className="text-danger display-3">All Blogs</p>
                        </div>
                        <div className="row justify-content-center text-center mt-2 mb-5">
                            {blogs.map((blog) =>(
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
                                        <BlogCard key={uuid()} blog={blog}/>
                                    </div>
                            ))
                            }
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default AllBlogs;