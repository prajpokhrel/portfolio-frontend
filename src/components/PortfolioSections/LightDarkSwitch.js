import React from "react";
import "../../containers/Portfolio/Portfolio.css";

const LightDarkSwitch = () => {
    return (
        <section className="switch-wrapper">
            <div className={`container-fluid switch-container text-light`}>
                <button className="btn btn-primary btn-small">Switch</button>
            </div>
        </section>
    );
};

export default LightDarkSwitch;