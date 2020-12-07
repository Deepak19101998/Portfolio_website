import React, { Component } from 'react';
import { Consumer } from '../context';

class AddRecommendation extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
            company : "",
            designation : "",
            message : "",
            submitMessage : "",
            submitMessageTextColor : "",
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    onHandleSubmit = (addHandler,event) =>{
        event.preventDefault();
        let isSuccseeful = true;
        if(isSuccseeful){
            this.setState({
                submitMessage : "Project Published Successfully",
                submitMessageTextColor : "text-success h3"
            })
        }
        else{
            this.setState({
                submitMessage : "Opps!.. Publish Failed",
                submitMessageTextColor : "text-danger h3"
            })
        }

        const newRecommendation = {
            id: 6,
            name: this.state.name,
            company: this.state.company,
            designation: this.state.designation,
            message: this.state.message,
          };
      
          addHandler("ADD_RECOMMENDATION", newRecommendation);
    }

    render(){

        return(
            <Consumer>
                {(value =>{
                    const {submitMessage,submitMessageTextColor} = this.state;
                    const {addHandler} = value;

                    return(
                        <div className="container py-5 mt-5">
                            <div className="text-center">
                                <p className="display-4"><span className="text-info">Add </span>
                                Recommendation</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-6">
                                <form onSubmit={this.onHandleSubmit.bind(this,addHandler)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name*</label>
                                            <input 
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Type your name"
                                                onChange = {this.onChangeHandler}
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Company*</label>
                                            <input 
                                                type="text"
                                                name="company"
                                                className="form-control"
                                                placeholder="Type your company"
                                                onChange = {this.onChangeHandler}
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Designation</label>
                                            <input 
                                                type="text"
                                                name="designation"
                                                className="form-control"
                                                onChange = {this.onChangeHandler}
                                                placeholder="Type your designation"/>
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="name">Messgae*</label>
                                            <textarea 
                                                name="message" cols="30" rows="5"
                                                className="form-control"
                                                onChange={this.onChangeHandler}
                                                placeholder="Type any message"
                                                required>
                                            </textarea>
                                        </div>
                                        <div className="text-center py-2">
                                            <button 
                                                type="submit"
                                                className="btn btn-dark float-right"
                                                style = {{backgroundColor:"black"}}
                                                >
                                                    publish
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-center py-2">
                                <h3 className={submitMessageTextColor}>{submitMessage}</h3>
                            </div>
                        </div>
                    );
                })}
            </Consumer>
        )    
    }
}

export default AddRecommendation;