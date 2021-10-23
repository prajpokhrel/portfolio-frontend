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
import { Redirect } from "react-router-dom";

const Portfolio = () => {

    const [auth, setAuth] = useState(null);

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

    return (
        <div className="bg-dark text-light">
            {
                auth === true ? (
                    <>
                        <LightDarkSwitch />
                        <IntroductionSection />
                        <AboutMeSection />
                        <SkillsSection />
                        <ExperienceSection />
                        <PortfolioProjectsSection />
                        <ContactSection />
                        <FooterSection />
                    </>
                ) : auth === false ?
                (
                    <Redirect to="/auth/login" />
                )
                : auth === null ? <Loader /> : null
            }
        </div>
    );
};

export default Portfolio;