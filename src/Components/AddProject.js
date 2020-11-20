import React,{ Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import ReactMarkdown from 'react-markdown';
import App from '../App.css';

class AddProject extends Component{
    
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
    };

    handleBodyChange = (value) => {
        this.setState({
            body : value,
        });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        let isSuccseeful = true;
        if(isSuccseeful){
            this.setState({
                submitMessage : "Project Publish Successfully",
                submitMessageTextColor : "text-success h3"
            })
        }
        else{
            this.setState({
                submitMessage : "Opps!.. Publish Failed",
                submitMessageTextColor : "text-danger h3"
            })
        }
    }
    render(){
        const {imageurl,title,excerpt,body,submitMessage,submitMessageTextColor} = this.state;
        return(
            <div className="container-fluid py-lg-3 my-lg-5">
                <div className="text-center">
                    <h1 className="font-weight-light">
                        <span className="text-info">Add </span>
                        Project
                    </h1>
                </div>
                <div className="row py-2 mx-lg-4">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title *</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Title of an Image ..."
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
                                    placeholder="Type Imageurl ..."
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
                            <SimpleMDE 
                                onChange = {this.handleBodyChange}
                                options={{
                                hideIcons:["preview","side-by-side","fullscreen"]
                            }}/>
                            <div className="text-center">
                                <button 
                                    className="btn btn-dark btn-block"
                                    style = {{backgroundColor:"black"}} 
                                    onSubmit={this.handleSubmit}>
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
                        <div className="text-center">
                            <h1 className="font-weight-light text-danger">{title}</h1>
                        </div>
                        <div className="py-lg-2 justiy-content-center">
                            <img src={imageurl} />
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
    }
}

export default AddProject;