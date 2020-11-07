const { default: SkillCard } = require("./SkillCard");

function Skill(){

    const skillcards = [
        {
            id: 1,
            title:"He is a Good Engineer",
            about:"Random Guy",
            message:"CEO At ABC Company"
        },
        {
            id: 2,
            title:"He is a Good Engineer",
            about:"Random Guy",
            message:"CEO At ABC Company"
        },
        {
            id: 3,
            title:"He is a Good Engineer",
            about:"Random Guy",
            message:"CEO At ABC Company"
        },
        {
            id: 4,
            title:"He is a Good Engineer",
            about:"Random Guy",
            message:"CEO At ABC Company"
        },
        {
            id: 5,
            title:"He is a Good Engineer",
            about:"Random Guy",
            message:"CEO At ABC Company"
        },
        {
            id: 6,
            title:"He is a Good Engineer",
            about:"Random Guy",
            message:"CEO At ABC Company"
        }       
    ];

    return(
        <div className="container-fluid py-3">
            <div className="row text-center">
                {skillcards.map((skillcard)=>(
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3"> 
                        <SkillCard skillcard={skillcard}/>
                    </div>  
                ))}              
            </div>
        </div>
    );
}
export default Skill;