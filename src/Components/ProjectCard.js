function ProjectSection(props){
    const { title, content, ImageUrl} = props.project;
        return(
            <div className="card shadow-lg">
                <img src={ImageUrl} alt="Project-img" className="img-fluid card-img-top"/>
                <div className="card-body">
                    <h3 class="card-title mb-0">{title}</h3>
                    <p class="card-text mb-0">{content}</p>
                    <a href="/" class="streched link"></a>  
                </div>
            </div>
        );
    }
export default ProjectSection;