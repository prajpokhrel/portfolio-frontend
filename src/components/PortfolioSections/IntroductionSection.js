import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import {useHistory} from "react-router-dom";

const IntroductionSection = ({ introDetails }) => {

    const history = useHistory();

    const handleNameClick = () => {
        history.push('/profile');
    }

    return (
        <section className="intro-wrapper">
            <div className='container'>
                <div className="row">
                    <div className="col-sm-7 intro-contents">
                        <div>
                            <h1 className="introHello">Hello! 👋</h1>
                        </div>
                        <div className="introTagLine">
                            <h2 className="introTag">
                                I'm <strong onClick={handleNameClick}>{introDetails[0].firstName} {introDetails[0].lastName}</strong>, a design-minded front-end software engineer
                                focused on building beautiful interfaces & experiences.
                            </h2>
                        </div>
                        <div>
                            <h3 className="introContact">Get in touch 👉 <span className="introEmail">{introDetails[0].email}</span></h3>
                        </div>
                    </div>
                    <div className="col-sm-5">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroductionSection;