import {Component} from 'react';
import { v4 as uuid } from "uuid";
import RecommendationCard from "./RecommendationCard";
import RecommendationModal from './RecommendationModal';

class Recommendation extends Component{
    constructor(){
        super();
        this.state = {
            actualId : 0,
            recommendationcards : [
                {
                    id: 0,
                    title:"He is a Good Engineer",
                    about:"Random Guy",
                    company:"CEO At MNO Company"
                },
                {
                    id: 1,
                    title:"He is a Good Engineer",
                    about:"Random Girl",
                    company:"CEO At ABC Company"
                },
                {
                    id: 2,
                    title:"He is a Good Engineer",
                    about:"Random Boy",
                    company:"CEO At BCD Company"
                },
                {
                    id: 3,
                    title:"He is a Good Engineer",
                    about:"Random Uncle",
                    company:"CEO At EFG Company"
                },
                {
                    id: 4,
                    title:"He is a Good Engineer",
                    about:"Random project",
                    company:"CEO At HIJ Company"
                },
                {
                    id: 5,
                    title:"He is a Good Engineer",
                    about:"Random task",
                    company:"CEO At KLM Company"
                }       
        ]
        }
    }
    
    handleClick = (e) =>{
        let {actualId} = this.state;
        let targetId = e.target.parentNode;
         if(targetId.parentNode.parentNode.getAttribute('id')!=null){
            this.setState({
                actualId : e.target.parentNode.parentNode.parentNode.getAttribute('id'),
            })
         }
         else if(targetId.parentNode.getAttribute('id')!=null){
             this.setState({
                actualId : targetId.parentNode.getAttribute('id')
             })
         }
         else{
             this.setState({
                actualId : targetId.getAttribute('id')
             })
         }
    }

    render(){
        const {recommendationcards, actualId} = this.state;    
        return(
            <div className="container-fluid py-3">
                <div className="row text-center">
                    {recommendationcards.map((recommendationcard)=>(
                        <div key={uuid()} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-3"
                             data-toggle="modal"
                             data-target='#a'
                             id={recommendationcard.id} onClick={this.handleClick}> 
                             <RecommendationCard key={uuid()} recommendationcard={recommendationcard} />
                        </div>  
                    ))}
                </div>
                <RecommendationModal actualId={this.state.actualId} recommendationcards={this.state.recommendationcards}/>
        
                    

                {/* <div className="modal fade" id='a'>
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">       
                            <div className="modal-header">
                                <h3>{recommendationcards[actualId].title}</h3>
                            </div>
                            <div className="modal-body">
                                {recommendationcards[actualId].about}
                            </div>
                            <div className="mb-3 modal-footer">
                                {recommendationcards[actualId].company} 
                            </div>
                            <div className="text-center">
                            <input type="button" value="Close" data-dismiss="modal"
                                className="btn btn-md btn-danger mb-3" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Recommendation;
