import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import "../FeaturedProject/FeaturedProject.css";

const ExperienceSection = ({experienceDetails}) => {

    return (
        <section className="work-experience">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 m-auto work-contents">
                        <h1 className="work-heading text-center">Where I've Worked</h1><br/>
                        <div className="col-sm-12">

                            {
                                experienceDetails.map((experiences, index) => {
                                    return (
                                        <>
                                            <div key={experiences._id} className="work-experience-card mb-2">
                                                <h3 className="experience__number">0{index + 1}.</h3>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="experience__title">
                                                            <h4>@{experiences.employer}</h4>
                                                            <h3>{experiences.jobTitle}</h3>
                                                            <h5>{experiences.startDate.substr(0, 10)} to {experiences.endDate.substr(0, 10)}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="experience__description">
                                                            {experiences.jobDescription.map((details, index) => {
                                                                return (<li key={index}>{details}</li>);
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;