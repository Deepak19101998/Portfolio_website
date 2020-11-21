import React from "react";
import "../App.css";
import TechnologyCard from "./TechnologyCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Technology(){
  const finalTechnologyRow = [];
  return(
    <Consumer>
      {value=>{
        const {technologies} = value;

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
      }
    </Consumer>
  );
}
export default Technology;