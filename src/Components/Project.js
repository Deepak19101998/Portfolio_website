import React from "react";
import ProjectCard from "./ProjectCard";

function Project(){
    
    const projects = [
        {
            id: 1,
            ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
            title:"Project 1",
            content:"This is my project about...",
        },
        {
            id: 2,
            ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
            title:"Project 2",
            content:"This is my project about...",
        },
        {   
            id:3,
            ImageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
            title:"Project 3",
            content:"This is my project about...",
        },
    ]

    return(
        <div className="container py-3">
            <div className="text-center py-3">
                <h1>My <span className="text-info">Project</span></h1>
                <p className="h3">I build products just like this</p>
            </div>
            <div className="row justify-content-around text-center py-3">
                {projects.map((abc) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
                        <ProjectCard project={abc} />
                    </div>
                ))}
            </div>
            <div className="py-4">
                    <a href="/" className="text-right text-dark font-weight-bold">
                        <h5>See My Projects <span className="fas fa-arrow-right align-middle"></span></h5>
                    </a>
            </div>
        </div>
    );
}
export default Project;