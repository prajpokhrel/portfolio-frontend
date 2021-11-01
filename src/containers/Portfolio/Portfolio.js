import React, {useEffect, useState} from "react";
import "./Portfolio.css";
import LightDarkSwitch from "../../components/PortfolioSections/LightDarkSwitch";
import IntroductionSection from "../../components/PortfolioSections/IntroductionSection";
import AboutMeSection from "../../components/PortfolioSections/AboutMeSection";
import SkillsSection from "../../components/PortfolioSections/SkillsSection";
import ExperienceSection from "../../components/PortfolioSections/ExperienceSection";
import PortfolioProjectsSection from "../../components/PortfolioSections/PortfolioProjectsSection";
import ContactSection from "../../components/PortfolioSections/ContactSection";
import FooterSection from "../../components/PortfolioSections/FooterSection";
import axios from "../../axios-portfolio";
import Loader from "../../components/Loader/Loader";
import { Redirect, useParams } from "react-router-dom";

const Portfolio = () => {

    const [auth, setAuth] = useState(null);
    const [portfolioDetails, setPortfolioDetails] = useState({});
    const { portfolioId } = useParams();

    useEffect(() => {
        const loggedInUser = () => {
            axios.get('/users/me', {withCredentials: true, credentials: 'include'})
                .then((response) => {
                    console.log("Logged in user", response.data);
                    setAuth(prevState => true);
                }).catch((error) => {
                setAuth(prevState => false);
                console.log("Error: ", error.response);
            });
        };

        // can handle promise if needed
        loggedInUser();

    }, []);

    console.log(portfolioId);

    useEffect(() => {
        const portfolioDetails = () => {
            axios.get(`/portfolio/${portfolioId}`, {withCredentials: true, credentials: 'include'})
                .then((response) => {
                    setPortfolioDetails(response.data[0]);
                }).catch((error) => {
                    console.log(error.response.data);
            });
        };

        portfolioDetails();
    }, []);

    return (
        <div className="bg-dark text-light">
            {
                auth === true ? (
                    <>
                        {
                            Object.keys(portfolioDetails).length !== 0
                            && portfolioDetails.personal.length !== 0
                            && portfolioDetails.background.length !== 0
                            && portfolioDetails.skill.length !== 0
                            && portfolioDetails.experience.length !== 0
                            && portfolioDetails.featured.length !== 0
                            && portfolioDetails.other.length !== 0
                            && portfolioDetails.contact.length !== 0
                                ?
                                <>
                                    <LightDarkSwitch />
                                    <IntroductionSection introDetails={portfolioDetails.personal} />
                                    <AboutMeSection aboutMeDetails={portfolioDetails.background}
                                                    introDetails={portfolioDetails.personal} />
                                    <SkillsSection skillDetails={portfolioDetails.skill} />
                                    <ExperienceSection experienceDetails={portfolioDetails.experience} />
                                    <PortfolioProjectsSection featured={portfolioDetails.featured}
                                                              other={portfolioDetails.other} />
                                    <ContactSection contactDetails={portfolioDetails.contact} />
                                    <FooterSection />
                                </> : <Loader message="Portfolio Incomplete... Come back later after you complete building it..." redirectButton={true}/>
                        }
                    </>
                ) : auth === false ?
                (
                    <Redirect to="/auth/login" />
                )
                : auth === null ? <Loader message="Gathering information... Please wait for a while..." redirectButton={false} /> : null
            }
        </div>
    );
};

export default Portfolio;