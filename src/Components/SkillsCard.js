import React from 'react';
import { v4 as uuid } from "uuid";

function SkillsCard(props){
    const {name, imageUrl, starsTotal, starsActive}= props.skill;
    
    const starList = [];
    
    for(let i=0;i<starsTotal;i++){
        if(i<starsActive){
            starList.push(<span key={uuid()} className="text-info">★</span>);
        }
        else{
            starList.push(<span className="text-danger" key={uuid()}>★</span>);
        }
    }

    return (
        <div>
            <img className="rounded-circle crd-img-size" src={imageUrl} alt={name} />
            <div className="text-center">
                {starList}
            </div>
        </div>
    )
}
export default SkillsCard;
