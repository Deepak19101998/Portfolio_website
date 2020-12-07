import React,{ Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import ReactMarkdown from 'react-markdown';
import '../App.css';
import { Consumer } from '../context';
import { v4 as uuid } from 'uuid';

class AddBlog extends Component{
    
    state = {
            imageurl : "",
            title : "",
            excerpt : "",
            body : "",
            submitMessage : "",
            submitMessageTextColor : "",
        };

    haldleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
        });
        // $(".form-control").focus(function(){
        //     $(".form-control").css('background','blue');
        // })
    };

    handleBodyChange = (value) => {
        this.setState({
            body : value,
        });
    };

    handleSubmit = (addHandler, event) =>{
        event.preventDefault();
        let isSuccseeful = true;
        if(isSuccseeful){
            this.setState({
                submitMessage : "Bolg Published Successfully",
                submitMessageTextColor : "text-success h3"
            })
        }
        else{
            this.setState({
                submitMessage : "Opps!.. Publish Failed",
                submitMessageTextColor : "text-danger h3"
            })
        }
        const {title,imageurl,excerpt} = this.state;
        const newBlog = {
            id : uuid(),
            title : title,
            ImageUrl : imageurl,
            excerpt : excerpt,
        }

        addHandler("ADD_BLOG", newBlog);

    }
    render(){
        return(
            <Consumer>
                {(value) => {
                    const {imageurl,title,excerpt,body,submitMessage,submitMessageTextColor} = this.state;
                    const {addHandler} = value;
                    return(
                        <div className="container-fluid py-5 mt-5">
                            <div className="text-center">
                                <h1 className="font-weight-light">
                                    <span className="text-info">Add </span>
                                    Blog
                                </h1>
                            </div>
                            <div className="row py-2 mx-lg-4">
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <form onSubmit={this.handleSubmit.bind(this, addHandler)}>
                                        <div className="form-group">
                                            <label htmlFor="title">Title *</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Title of an Image..."
                                                name="title"
                                                onChange={this.haldleChange}
                                                required    
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="imageurl">Features Image Url *</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Type Imageurl..."
                                                name="imageurl"
                                                onChange={this.haldleChange}
                                                required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="excerpt">Excerpt *</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Excerpt"
                                                name="excerpt"
                                                onChange={this.haldleChange}
                                                required    
                                            />
                                        </div>
                                        <label htmlFor="">Optional</label>
                                        <SimpleMDE 
                                            onChange = {this.handleBodyChange}
                                            options={{
                                            hideIcons:["preview","side-by-side","fullscreen"]
                                        }}/>
                                        <div className="text-center">
                                            <button 
                                                type="submit"
                                                className="btn btn-dark btn-block"
                                                style = {{backgroundColor:"black"}}
                                                >
                                                    publish
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-center my-3">
                                        <p className={submitMessageTextColor}>
                                            {submitMessage}
                                        </p> 
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-xl-6 markdown">
                                    <div className="text-center my-lg-0 my-3">
                                        <h1 className="font-weight-light text-danger">{title}</h1>
                                    </div>
                                    <div className="py-lg-2 justiy-content-center">
                                        <img src={imageurl} alt={title}/>
                                    </div>   
                                    <div className="justify-content-center my-2">
                                        <p className="lead text-info">{excerpt}</p>
                                    </div> 
                                    <div className="my-2">
                                        <ReactMarkdown source={body}/>
                                    </div>             
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )        
    }
}

export default AddBlog;