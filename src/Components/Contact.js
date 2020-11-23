import React, {Component} from 'react';

class Contact extends Component{
    
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            description:"",
            submitMessage:"",
            submitMessageTextColor:""
        }  
    }

    onChangeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    onSubmitForm = (event) =>{
        event.preventDefault();
        let isSuccessful = true;
        const {name} = this.state;
        if(isSuccessful){
            this.setState({
                submitMessage : `Thank you ${name}, I will contact you soon`,
                submitMessageTextColor : "text-info"
            })
        }
        else{
            this.setState({
                submitMessage : "Oops.. Something went wrong",
                submitMessageTextColor : "text-danger"
            })
        }
    }

    render(){
        const {submitMessageTextColor, submitMessage} = this.state;
        return(
            <div className="container-fluid py-4">
                <h1 className="font-weight-light text-center py-3"> 
                    <span className="text-info">Thank You!</span> for your support
                </h1>
                <div className="row justify-content-center py-2">
                    <div className="col-11 col-md-11 col-lg-6 col-xl-6">
                        <form onSubmit={this.onSubmitForm}> 
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input className="form-control" 
                                type="text" 
                                name="name" 
                                placeholder="Type your name" 
                                onChange = {this.onChangeHandler}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email *</label>
                                <input className="form-control"
                                type="email" 
                                name="email"
                                placeholder="Type your email"
                                onChange = {this.onChangeHandler}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descriptiom">
                                    Tell me about yourself *
                                </label>
                                <textarea 
                                    name="description" 
                                    className="form-control" 
                                    rows="5"
                                    onChange = {this.onChangeHandler}>  
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-danger float-right" onSubmit={this.onSubmitForm}> 
                                Let's talk business
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center py-2">
                    <h4 className={submitMessageTextColor}>{submitMessage}</h4>
                </div>
            </div>
        );
    }
}

export default Contact;