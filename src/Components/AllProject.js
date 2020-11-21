import React from 'react';
import { Consumer } from '../context';
import { v4 as uuid } from "uuid";
import ProjectCard from './ProjectCard';

function AllProject(){
    return(
        <Consumer>
            {(value) =>{
                const {projects} = value;
                return(
                    <div className="container py-2 my-2">
                        <div className="text-center py-3">
                            <p className="text-danger display-3">All Projects</p>
                        </div>
                        <div className="row justify-content-around text-center mt-2 mb-5">
                            {projects.map((abc) => (
                                <div key={uuid()} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
                                    <ProjectCard key={uuid()} project={abc} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );  
}

export default AllProject;