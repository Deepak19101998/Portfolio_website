import React from 'react';

function BlogPage(props){
    return(
        <div className="container py-5 my-5">
            <h1 className="text-center">
                Blog {props.match.params.id}
            </h1>
        </div>
    )
}

export default BlogPage;