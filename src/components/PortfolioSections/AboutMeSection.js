import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";

const AboutMeSection = ({ aboutMeDetails, introDetails }) => {

    return (
        <section className="about-me-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 about-me-contents">
                        <div className="about-header">
                            <h1>About Me</h1>
                        </div>
                        <div className="about-description">
                            <p>
                                {aboutMeDetails[0].currentWork} {aboutMeDetails[0].previousEducation}
                            </p>
                            <p>
                                {aboutMeDetails[0].currentJobDescription}
                            </p>
                            <p>
                                {aboutMeDetails[0].outsideActivities}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5 profile-picture-wrapper">
                        <div className="col-sm-8 profile-picture-container">
                            {
                                introDetails[0].profileImage !== ''
                                    ? <img className="profile-image rounded img-fluid" src={`https://gory-grave-47999.herokuapp.com/${introDetails[0].profileImage}`} alt="profile image portfolio"/>
                                    : <h3 className="text-center text-warning">Don't be shy to add your profile picture.</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;