import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';

function ProjectCard(props){
    const {id, title, content, ImageUrl} = props.project;
        return(
            <div key={uuid()} className="card shadow-lg">
                <img src={ImageUrl} alt="Project-img" className="img-fluid card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title mb-0">{title}</h3>
                    <p className="card-text mb-0">{content}</p>
                    <Link to={`/projectpage/${id}`} className="stretched-link"></Link>  
                </div>
            </div>
        );
    }
export default ProjectCard;