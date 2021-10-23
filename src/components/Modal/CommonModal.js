import React, {useState} from 'react';
import "./CommonModal.css";


const CommonModal = (props) => {

    return (
        <div id="myModal" onClick={props.createPortfolioModal} className="modal" style={{display: props.show ? 'block' : 'none'}}>
            <div  onClick={(event) => {
                // do not close modal if anything inside modal content is clicked
                event.stopPropagation();
            }} className="modal_content">
                <div className="modalHeader">
                    <h4>Create Portfolio</h4>
                    <span className="close" onClick={props.createPortfolioModal}>&times;</span>
                </div>
                <div>
                    {props.children}
                </div>
            </div>

        </div>
    );
}

export default CommonModal;