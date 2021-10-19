import React, {useEffect} from "react";
import "./ProjectListCard.css";

const ProjectListCard = () => {

    return (
        <div className="row">
            <div className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <a href="#" className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                            {/*<button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                        </div>
                        <div className="listcard__title">
                            <h4><strong>Diabetic Retinopathy Detection</strong></h4>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <a href="#" className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                            {/*<button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                        </div>
                        <div className="listcard__title">
                            <h4><strong>Extraction of Blood Vessels</strong></h4>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <a href="#" className="listproject__github"><i className="fas fa-external-link-alt"></i></a>
                            {/*<button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                        </div>
                        <div className="listcard__title">
                            <h4><strong>Sorting Algorithms Visualizers</strong></h4>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                        </div>
                        <div className="listcard__title">
                            <h4><strong>Creative Chat</strong></h4>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                        </div>
                        <div className="listcard__title">
                            <h4><strong>Soduku Solver</strong></h4>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-sm-4 listcard__container">
                <div className="card listcard__main">
                    <div className="card-body listcard__contents">
                        <div className="listcard__header">
                            <a href="#" className="listproject__github"><i className="fab fa-github"></i></a>
                            <button className="listcard__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                        </div>
                        <div className="listcard__title">
                            <h4><strong>Diabetic Retinopathy</strong></h4>
                        </div>
                        <div className="listcard__description">
                            <p>Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia. Building a custom multsite compatible WordPress plugin to
                                build global search with Algolia.</p>
                        </div>
                        <div className="listcard__tech">
                            <span><small>Algolia WordPress PHP</small></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectListCard;