import React from 'react';
import { Consumer } from '../context';
function ProjectPage(props){
    return(
        <Consumer>
            {(value)=>{
                const {projects} = value;
                const id = props.match.params.id;
                const project = projects.filter((project) => project.id == id)[0];
                const {ImageUrl,title,content} = project;
                return(
                    <div className="container py-2 markdown">
                        <div className="row justify-content-center">
                            <img src={ImageUrl} alt={title} className="w-75" />
                        </div>
                        <div className="mt-3">
                            <p className="h2 font-weight-light text-center">{title}</p>
                        </div>
                        <div className="text-center py-2">
                            {content}
                        </div>
                    </div>
                )
            }}
        </Consumer>       
    )
}

export default ProjectPage;