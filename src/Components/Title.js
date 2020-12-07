import React from "react";
import Dummy from "../pictures/dummy.png";

function Title(){
    const name = "Deepak Gupta";
    const leadText = "I am a job Seeker";
    return(
        <div className="container py-5 mt-5">
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                <img className="img-fluid rounded-circle" src={Dummy} alt="Doraemon"/>
                </div>
                <div className="col-12 col-md-6">
                    <h1>Hi, I am <span className="text-info">{name}</span></h1>
                    <p className="h3 font-weight-light">{leadText}</p>
                </div>
            </div>
        </div>
    );
}
export default Title;