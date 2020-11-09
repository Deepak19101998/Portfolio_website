import React from 'react';
import { v4 as uuid } from "uuid";

function RecommendationCard(props) {
    const {about, title, company} = props.recommendationcard;
    const shorttitle = title.slice(0,20);
    return (
        <div key={uuid()} className="card shadow-lg">
            <div className="card-body">
                <h4 className="card-text">
                    {shorttitle+" ...."}
                </h4>
                <p className="card-text mb-0">
                    {about}
                </p>
                <p className="card-text">
                    {company}
                </p>
            </div>
        </div>
    )
}
export default RecommendationCard;
