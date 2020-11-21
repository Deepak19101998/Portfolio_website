import {Component} from 'react';
import { v4 as uuid } from "uuid";
import { Consumer } from '../context';
import RecommendationCard from "./RecommendationCard";
import RecommendationModal from './RecommendationModal';

class Recommendation extends Component{
        state = {
            actualId : 0,
        }
    
    handleClick = (e) =>{
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
        const {actualId} = this.state;
        return( 
        <Consumer>
            {value=>{
                const {recommendationcards} = value;
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
                        <RecommendationModal actualId={actualId} recommendationcards={recommendationcards}/>
                    </div>
                );
            }}
        </Consumer>      
        )
    }
}

export default Recommendation;
