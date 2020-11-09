import { v4 as uuid } from "uuid";
import RecommendationCard from "./RecommendationCard";
import Modal from "react-bootstrap";

function Recommendation(){

    const recommendationcards = [
        {
            id: 1,
            title:"He is a Good Engineer",
            about:"Random Guy",
            company:"CEO At ABC Company"
        },
        {
            id: 2,
            title:"He is a Good Engineer",
            about:"Random Guy",
            company:"CEO At ABC Company"
        },
        {
            id: 3,
            title:"He is a Good Engineer",
            about:"Random Guy",
            company:"CEO At ABC Company"
        },
        {
            id: 4,
            title:"He is a Good Engineer",
            about:"Random Guy",
            company:"CEO At ABC Company"
        },
        {
            id: 5,
            title:"He is a Good Engineer",
            about:"Random Guy",
            company:"CEO At ABC Company"
        },
        {
            id: 6,
            title:"He is a Good Engineer",
            about:"Random Guy",
            company:"CEO At ABC Company"
        }       
    ];

    return(
        <div className="container-fluid py-3">
            <div className="row text-center">
                {recommendationcards.map((recommendationcard)=>(
                    <div key={uuid()} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3"> 
                        <RecommendationCard key={uuid()} recommendationcard={recommendationcard} />
                    </div>  
                ))}
                <div className="modal fade" id="a">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Title</h3>
                            </div>
                            <div className="modal-body">
                                Write a message here to display on screen
                            </div>
                            <div className="text-left mb-3">
                                <input type="button" value="Close" data-dismiss="modal" className="btn btn-danger" />
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/"
                    data-toggle="modal"
                    data-target="#a"
                    className="btn btn-primary"

                >MNO</a>
            </div>
        </div>
    );
}
export default Recommendation;