import * as React from "react";
import "./PortfolioBuilder.css";
import Navigation from "../../components/Navigation/Navigation";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import PersonalInfo from "../../components/CreatePortfolio/PersonalInfo";
import BackgroundInfo from "../../components/CreatePortfolio/BackgroundInfo";
import Experience from "../../components/CreatePortfolio/Experience";
import FeaturedProject from "../../components/CreatePortfolio/FeaturedProject";
import OtherProject from "../../components/CreatePortfolio/OtherProject";
import ContactStatus from "../../components/CreatePortfolio/ContactStatus";
import Skills from "../../components/CreatePortfolio/Skills";
import FooterSection from "../../components/PortfolioSections/FooterSection";
import {useParams, useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "../../axios-portfolio";
import Loader from "../../components/Loader/Loader";

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
    const [currentUser, setCurrentUser] = useState({});
    const [auth, setAuth] = useState(null);
    const { portfolioId } = useParams();
    const history = useHistory();

    useEffect(() => {
        const loggedInUser = () => {
            axios.get('/users/me', {withCredentials: true, credentials: 'include'})
                .then((response) => {
                    console.log("Logged in user", response.data);
                    setCurrentUser(prevState => response.data)
                    setAuth(prevState => true);
                }).catch((error) => {
                setAuth(prevState => false);
                console.log("Error: ", error.response);
            });
        };

        // can handle promise if needed
        loggedInUser();

    }, []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const viewPortfolioHandler = (portfolioId) => {
        history.push(`/portfolio/${portfolioId}`);
    };

    return (
        <div>

            {
                auth === true ?
                    (
                    <>
                        {/*Refactor this later*/}
                        <Navigation headingTitle="Portfolio Build"
                                    createPortfolioButton={false}
                                    loggedUserName={currentUser.userName}
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
                                                    <div className="row mt-5 mb-5">
                                                        <div className="col-sm-12 success-container">
                                                            <h1 className="mb-5">Congratulations! you have successfully built your portfolio.</h1>
                                                            <Button onClick={() => viewPortfolioHandler(portfolioId)} variant="outlined" size="large">
                                                                View Portfolio
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                        <Box sx={{ flex: '1 1 auto' }} />
                                                        <Button variant="outlined" onClick={handleBack}>
                                                            Back
                                                        </Button>
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
                                                            variant="outlined"
                                                            disabled={activeStep === 0}
                                                            onClick={handleBack}
                                                            sx={{ mr: 1 }}
                                                        >
                                                            Back
                                                        </Button>
                                                        <Box sx={{ flex: '1 1 auto' }} />

                                                        <Button variant="outlined" onClick={handleNext}>
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
                    </>
                    )
                    : auth === false ?
                    (
                        <Redirect to="/auth/login" />
                    ) : auth === null ? <Loader /> : null
            }
        </div>
    );
};

export default PortfolioBuilder;