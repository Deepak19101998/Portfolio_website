import React from 'react';
import { Consumer } from '../context';

function BlogPage(props){
    return(
        <Consumer>
            {(value)=>{
                const {blogs} = value;
                const id = props.match.params.id;
                const blog = blogs.filter((blog) => blog.id == id)[0];
                const {ImageUrl,title,content} = blog;
                return(
                    <div className="container py-5 mt-5 markdown">
                        <div className="row justify-content-center pt-4">
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

export default BlogPage;