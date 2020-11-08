import { v4 as uuid } from "uuid";

function ProjectSection(props){
    const { title, content, ImageUrl} = props.project;
        return(
            <div key={uuid()} className="card shadow-lg">
                <img src={ImageUrl} alt="Project-img" className="img-fluid card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title mb-0">{title}</h3>
                    <p className="card-text mb-0">{content}</p>
                    <a href="/" className="streched link"></a>  
                </div>
            </div>
        );
    }
export default ProjectSection;