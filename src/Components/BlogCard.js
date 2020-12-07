import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';

function BlogCard(props){

    const {id, title, excerpt, ImageUrl} = props.blog;

    return(
        <div key={uuid()} className="card shadow-lg">
            <img src={ImageUrl} alt="Blog-related-img" className="img-fluid card-img-top"/>
            <div className="card-body">
                <h3 className="card-title mb-0">{title}</h3>
                <p className="card-text mb-0">{excerpt}</p>
                <Link to={`/blogpage/${id}`} className="stretched-link"></Link>
            </div>
        </div>
    );
}
export default BlogCard;