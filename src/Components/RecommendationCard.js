import React from 'react'

function RecommendationCard(props) {
    const {about, title, company} = props.recommendationcard;
    return (
        <div className="card shadow-lg">
            <div className="card-body">
                <h3 className="card-text">
                    {title}
                </h3>
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
