import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import axios from "../../axios-portfolio";

const IntroductionSection = () => {

    const [personal, setPersonal] = useState({});

    useEffect(() => {
        const getPersonal = async () => {
            try {
                const response = await axios.get('/personalInfo',
                    {withCredentials: true, credentials: 'include'});
                setPersonal(prevState => response.data[0]);
                console.log("Personal info", response.data[0]);
            } catch (error) {
                console.log(error.response);
            }
        };

        getPersonal();
    }, []);

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
                                I'm <strong>{personal.firstName} {personal.lastName}</strong>, a design-minded front-end software engineer
                                focused on building beautiful interfaces & experiences.
                            </h2>
                        </div>
                        <div>
                            <h3 className="introContact">Get in touch 👉 <span className="introEmail">{personal.email}</span></h3>
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