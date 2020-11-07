import React from 'react'

function SkillCard(props) {
    const {title, about, message} = props.skillcard;
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
                    {message}
                </p>
            </div>
        </div>
    )
}
export default SkillCard;
