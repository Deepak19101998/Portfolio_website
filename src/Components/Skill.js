import React from "react";
import "../App.css";
import SkillsCard from "./SkillsCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Skill(){
  const finalSkillRow = [];
  return(
    <Consumer>
      {value=>{
        const {skills} = value;

        for(let i=0;i<skills.length/4;i++){
            let skillRow = skills.slice(i*4,(i+1)*4);
            // console.log(row); only for checking purpose
            finalSkillRow.push(
                <div key={uuid()} className="d-flex flex-wrap justify-content-around py-3">
                    {skillRow.map((skill)=>(
                        <SkillsCard key={uuid()} skill={skill}/>
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
                 {finalSkillRow}
            </div>
          );
        }
      }
    </Consumer>
  );
}
export default Skill;