import React from 'react'

function RecommendationModal(props) {
    let {actualId, recommendationcards} = props;
    return (
        <div className="modal fade" id='a'>
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
        </div>
    )
}

export default RecommendationModal;
