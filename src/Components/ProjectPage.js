import React from 'react';

function ProjectPage(props){
    return(
        <div className="container py-5 my-5">
            <h1 className="text-center">
                Project {props.match.params.id}
            </h1>
        </div>
    )
}

export default ProjectPage;