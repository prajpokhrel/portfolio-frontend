import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import FeaturedProject from "../FeaturedProject/FeaturedProject";
import ProjectList from "../../containers/ProjectList/ProjectList";
import axios from "../../axios-portfolio";

const PortfolioProjectsSection = () => {

    const [featured, setFeatured] = useState({});
    const [others, setOthers] = useState({});

    useEffect(() => {
        const getFeaturedProject = async () => {
            try {
                const response = await axios.get('/featuredProject',
                    {withCredentials: true, credentials: 'include'});
                setFeatured(prevState => response.data);
                console.log("Featured Project", response.data);
            } catch (error) {
                console.log(error.response);
            }
        };

        getFeaturedProject();
    }, []);

    useEffect(() => {
        const getOtherProject = async () => {
            try {
                const response = await axios.get('/otherProject',
                    {withCredentials: true, credentials: 'include'});
                setOthers(prevState => response.data);
                console.log("Other Project", response.data);
            } catch (error) {
                console.log(error.response);
            }
        };

        getOtherProject();
    }, []);

    return (
        <section className="portfolioProjects">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 portfolio__content m-auto">
                        <h1 className="portfolio__header">Things i've Built</h1>
                        {/*<h1 className="portfolio__header">my portfolio projects</h1>*/}
                        <p className="lead portfolio__description">From Machine Learning to React.JS, Redux, and Node.JS,
                            Check out my latest software development portfolio projects.</p>

                        <FeaturedProject />

                        <ProjectList />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioProjectsSection;