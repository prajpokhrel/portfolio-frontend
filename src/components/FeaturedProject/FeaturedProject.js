import React, {useEffect} from "react";
import "./FeaturedProject.css";

const FeaturedProject = ({featured}) => {

    return (
        <div className="container-fluid card__container">
            {
                featured.map((featuredProjects, index) => {
                    return (
                        <>
                            <div key={featuredProjects._id} className="row">
                                <div className="col-sm-5 order-2 order-sm-1 card__left">
                                    <h3 className="project__number">0{index + 1}.</h3>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="project__title">
                                                <span>Featured Project</span>
                                                <h2>{featuredProjects.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="project__description">
                                                <span>{featuredProjects.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="project__tech">
                                                {featuredProjects.tools.map((value, index) => {
                                                    return <li key={index}>{value}</li>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="project__link">
                                                {/*<button className="card__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>*/}
                                                <a href={`${featuredProjects.demo}`} className="project__github"><i className="fas fa-external-link-alt"></i></a>
                                                <a href={`${featuredProjects.github}`} className="project__github"><i className="fab fa-github"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-7 order-1 order-sm-2 card__right">
                                    <div className="card__wrapper">
                                        <div className="overlay"></div>
                                        <img className="card__image img-fluid"
                                             src={`http://localhost:5000/${featuredProjects.projectImage}`}
                                             alt="project image portfolio"/>
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

export default FeaturedProject;