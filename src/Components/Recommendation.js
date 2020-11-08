const { default: RecommendationCard } = require("./RecommendationCard");


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
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3"> 
                        <RecommendationCard recommendationcard={recommendationcard} />
                    </div>  
                ))}              
            </div>
        </div>
    );
}
export default Recommendation;