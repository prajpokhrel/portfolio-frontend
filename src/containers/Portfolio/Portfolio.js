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

const Portfolio = () => {

    return (
        <div className="text-light">
            <LightDarkSwitch />
            <IntroductionSection />
            <AboutMeSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioProjectsSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
};

export default Portfolio;