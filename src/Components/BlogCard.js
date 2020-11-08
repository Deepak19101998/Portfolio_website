import { v4 as uuid } from "uuid";

function BlogCard(props){

    const {title, content, imageUrl} = props.blog;

    return(
        <div key={uuid()} className="card shadow-lg">
            <img src={imageUrl} alt="Blog-related-img" className="img-fluid card-img-top"/>
            <div className="card-body">
                <h3 className="card-title mb-0">{title}</h3>
                <p className="card-text mb-0">{content}</p>
            </div>
        </div>
    );
}
export default BlogCard;