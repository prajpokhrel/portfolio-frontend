import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import ProjectList from "../../containers/ProjectList/ProjectList";

const PortfolioProjectsSection = ({featured, other}) => {

    return (
        <section className="portfolioProjects">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 portfolio__content m-auto">
                        <h1 className="portfolio__header">Things i've Built</h1>
                        <p className="lead portfolio__description">From Machine Learning to React.JS, Redux, and Node.JS,
                            Check out my latest software development portfolio projects.</p>

                        <FeaturedProject featured={featured}/>

                        <ProjectList other={other}/>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioProjectsSection;