import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import axios from "../../axios-portfolio";

const AboutMeSection = () => {

    const [background, setBackground] = useState({});

    useEffect(() => {
        const getBackground = async () => {
            try {
                const response = await axios.get('/backgroundInfo',
                    {withCredentials: true, credentials: 'include'});
                setBackground(prevState => response.data);
                console.log("Background info", response.data);
            } catch (error) {
                console.log(error.response);
            }
        };

        getBackground();
    }, []);

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
                                Hello! My name is Brittany and I enjoy creating things that live on the internet.
                                My interest in web development started back in 2012 when I decided to try editing
                                custom Tumblr themes — turns out hacking together a custom reblog button taught
                                me a lot about HTML & CSS!
                            </p>
                            <p>
                                Fast-forward to today, and I’ve had the privilege of working at an advertising
                                agency, a start-up, a huge corporation, and a student-led design studio. My main
                                focus these days is building accessible, inclusive products and digital experiences
                                at Upstatement for a variety of clients.
                            </p>
                            <p>
                                I also recently launched a course that covers everything you need to build a web
                                app with the Spotify API using Node & React.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h1>Add a profile picture</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;