import React from "react";
import ProjectCard from "./ProjectCard";
import { v4 as uuid } from "uuid";
import {Consumer} from "../context.js";
import {Link} from "react-router-dom";

function Project(){
    return(
    <Consumer>
        {value =>{
            const {projects} = value;
            return(
                <div className="container py-3">
                    <div className="text-center py-3">
                        <h1>My <span className="text-info">Project</span></h1>
                        <p className="h3">I build products just like this</p>
                    </div>
                    <div className="row justify-content-around text-center py-3">
                        {projects.slice(0,3).map((abc) => (
                            <div key={uuid()} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
                                <ProjectCard key={uuid()} project={abc} />
                            </div>
                        ))}
                    </div>
                    <div className="py-4">
                            <Link to="allproject" className="text-right text-dark font-weight-bold">
                                <h5>See My Projects <span className="fas fa-arrow-right align-middle"></span></h5>
                            </Link>
                    </div>
                </div>
                );
        }}
    </Consumer>
    )
    
}
export default Project;