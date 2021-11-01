import React, {useEffect} from "react";
import "./ProjectListCard.css";

const ProjectListCard = ({other}) => {

    return (
        <div className="row">

            {
                other.map((otherProjects, index) => {
                    return (
                        <>
                            <div key={otherProjects._id} className="col-sm-4 listcard__container">
                                <div className="card listcard__main">
                                    <div className="card-body listcard__contents">
                                        <div className="listcard__header">
                                            <a href={`${otherProjects.github}`} className="listproject__github"><i className="fab fa-github"></i></a>
                                            <a href={`${otherProjects.demo}`} className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                                        </div>
                                        <div className="listcard__title">
                                            <h4><strong>{otherProjects.title}</strong></h4>
                                        </div>
                                        <div className="listcard__description">
                                            <p>{otherProjects.description}</p>
                                        </div>
                                        <div className="listcard__tech">
                                            {otherProjects.tools.map((tool, index) => {
                                                return <span key={index}><small>{tool}&nbsp;&nbsp;</small></span>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            }

        </div>
    );
};

export default ProjectListCard;