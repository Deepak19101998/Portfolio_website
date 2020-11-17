import React from "react";
import "../App.css";
import TechnologyCard from "./TechnologyCard";
import { v4 as uuid } from "uuid";

const technologies = [
    {
        id: 1,
        imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        name:"HTML5",
        starsTotal:3,
        starsActive:2
    },
    {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 0,
      }
];

const finalTechnologyRow = [];

for(let i=0;i<technologies.length/4;i++){
    let technologyRow = technologies.slice(i*4,(i+1)*4);
    // console.log(row); only for checking purpose
    finalTechnologyRow.push(
        <div key={uuid()} className="d-flex flex-wrap justify-content-around py-3">
            {technologyRow.map((technology)=>(
                <TechnologyCard key={uuid()} technology={technology}/>
            ))}
        </div>
    );
}

function Technology(){
    
    return(
        <div className="container-fluid py-4 bg-light">
            <div className="text-center font-weight-light">
                <h1 className="py-2 text-info">Technology Stack</h1>
                <p className="h3">I design, Develop adn deliver with this weapon</p>
            </div>
             {finalTechnologyRow}
        </div>
    );
}
export default Technology;