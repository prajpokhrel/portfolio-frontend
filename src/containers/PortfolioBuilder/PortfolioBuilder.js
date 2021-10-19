import * as React from "react";
import "./PortfolioBuilder.css";
import Navigation from "../../components/Navigation/Navigation";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import PersonalInfo from "../../components/CreatePortfolio/PersonalInfo";
import BackgroundInfo from "../../components/CreatePortfolio/BackgroundInfo";
import Experience from "../../components/CreatePortfolio/Experience";
import FeaturedProject from "../../components/CreatePortfolio/FeaturedProject";
import OtherProject from "../../components/CreatePortfolio/OtherProject";
import ContactStatus from "../../components/CreatePortfolio/ContactStatus";
import Skills from "../../components/CreatePortfolio/Skills";
import FooterSection from "../../components/PortfolioSections/FooterSection";

const steps = [
    'Personal Information',
    'Background Information',
    'Work Experience',
    'Skills',
    'Featured Projects',
    'Other Projects',
    'Contact'
];

const PortfolioBuilder = (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            {/*Refactor this later*/}
            <Navigation headingTitle="Portfolio Build"
                        createPortfolioButton={false}
            />
            {/*  Separating sections for portfolio */}
            <section className="build_portfolio_section bg-light text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <Box sx={{ width: '100%' }}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};

                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel  {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>

                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button onClick={handleReset}>Reset</Button>
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {
                                            activeStep === 0 ? <PersonalInfo />
                                                : activeStep === 1 ? <BackgroundInfo />
                                                : activeStep === 2 ? <Experience />
                                                : activeStep === 3 ? <Skills />
                                                : activeStep === 4 ? <FeaturedProject />
                                                : activeStep === 5 ? <OtherProject />
                                                : activeStep === 6 ? <ContactStatus /> : undefined
                                        }


                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Button
                                                color="primary"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />

                                            <Button onClick={handleNext}>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </Box>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default PortfolioBuilder;