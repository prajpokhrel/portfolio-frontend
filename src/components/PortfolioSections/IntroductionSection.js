import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import axios from "../../axios-portfolio";
import {useHistory} from "react-router-dom";

const IntroductionSection = () => {

    const [personal, setPersonal] = useState({});
    const history = useHistory();

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
                                I'm <strong onClick={handleNameClick}>Prajwal Pokhrel</strong>, a design-minded front-end software engineer
                                focused on building beautiful interfaces & experiences.
                            </h2>
                        </div>
                        <div>
                            <h3 className="introContact">Get in touch 👉 <span className="introEmail">prajwal@gmail.com</span></h3>
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