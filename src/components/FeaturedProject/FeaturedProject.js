import React, {useEffect} from "react";
import "./FeaturedProject.css";
// import diabetic from "../../../assets/media/diabetic_retinopathy.png";
// import sorting from "../../../assets/media/sorting_algorithms_visualization.png";

const FeaturedProject = (props) => {

    return (
        <div className="container-fluid card__container">
            <div className="row">
                <div className="col-sm-5 order-2 order-sm-1 card__left">
                    <h3 className="project__number">01.</h3>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__title">
                                <span>Featured Project</span>
                                <h2>Diabetic Retinopathy</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__description">
                            <span>This web app was built using React JS to visualize different sorting
                                    algorithms in action. This project was done to learn classic sorting algorithms
                                    and also improve my React skills.

                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__tech">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>Django</li>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__link">
                                <button className="card__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                                <a href="#" className="project__github"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-7 order-1 order-sm-2 card__right">
                    <div className="card__wrapper">
                        <div className="overlay"></div>
                        {/*<img src={diabetic} className="card__image" alt="image"/>*/}
                    </div>

                </div>

            </div>


            <div className="row">
                <div className="col-sm-5 order-2 order-sm-1 card__left">
                    <h3 className="project__number">02.</h3>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__title">
                                <span>Featured Project</span>
                                <h2>Sorting Algorithms Visualizer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__description">
                            <span>This web app was built using React JS to visualize different sorting
                                    algorithms in action. This project was done to improve my React skills
                                    and also learn classic sorting algorithms.
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__tech">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>Django</li>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="project__link">
                                <button className="card__demoBtn">Demo&nbsp;&nbsp;<i className="fas fa-external-link-alt"/></button>
                                <a href="#" className="project__github"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-sm-7 order-1 order-sm-2 card__right">

                    <div className="card__wrapper">
                        <div className="overlay"></div>
                        {/*<img src={sorting} className="card__image" alt="image2"/>*/}
                    </div>

                </div>


            </div>
        </div>
    );
};

export default FeaturedProject;