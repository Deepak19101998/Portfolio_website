import React from 'react';
import { v4 as uuid } from "uuid";

function RecommendationCard(props) {

    const {message, name, company} = props.recommendationcard;
    const shortmessage = message.slice(0,20);
    
    return (
        <div key={uuid()} className="card shadow-lg">
            <div className="card-body">
                <h3 className="card-text">
                    {shortmessage+"...."}
                </h3>
                <p className="card-text h5 mb-2">
                    {name}
                </p>
                <p className="card-text h5">
                    {company}
                </p>
            </div>
        </div>
    )
}
export default RecommendationCard;
