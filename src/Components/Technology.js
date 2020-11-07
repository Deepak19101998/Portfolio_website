import React from "react";
import "../App.css";
import HTML from "../pictures/html5.png";
import Css from "../pictures/css3.png";
import js from "../pictures/javascript.png";
import boot from "../pictures/bootstrap4.png";
import react from "../pictures/react.png";
import pythn from "../pictures/python.png";
import flask from "../pictures/flask.png";
import msql from "../pictures/mysql.png";

function Technology(){
    
    return(
        <div className="container-fluid py-4 bg-light">
            <div className="text-center font-weight-light">
                <h1 className="py-2">Technology Stack</h1>
                <p className="h3">I design, Develop adn deliver with this weapon</p>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-around text-center py-3">
                <div>
                    <img className="rounded-circle crd-img-size" src={HTML} alt="technology-related-img"  />
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-circle crd-img-size" src={Css} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-circle crd-img-size" src={js} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-circle crd-img-size" src={boot} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-around text-center py-3">
                <div>
                    <img className="rounded-circle crd-img-size" src={react} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-circle crd-img-size" src={flask} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-circle crd-img-size" src={pythn} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-circle crd-img-size" src={msql} alt="Technoloy-related-img"/>
                    <div>
                        <span class="text-info">★</span>
                        <span class="text-info">★</span>
                        <span class="">★</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Technology;