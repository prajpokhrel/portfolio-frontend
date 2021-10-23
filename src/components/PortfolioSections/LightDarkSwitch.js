import React from "react";
import "../../containers/Portfolio/Portfolio.css";

const LightDarkSwitch = () => {

    const socialMedias = [
        {name: "facebook", icon: <i className="fab fa-facebook-f"></i>},
        {name: "Instagram", icon: <i className="fab fa-instagram"></i>},
        {name: "Twitter", icon: <i className="fab fa-twitter"></i>},
        {name: "Github", icon: <i className="fab fa-github"></i>},
        {name: "LinkedIn", icon: <i className="fab fa-linkedin"></i>},
    ];

    return (
        <section className="switch-wrapper">
            <div className={`container-fluid switch-container text-light`}>
                {socialMedias.map((icons, index) => {
                    return <div key={index} className="icons-container">{icons.icon}</div>
                })}
            </div>
        </section>
    );
};

export default LightDarkSwitch;