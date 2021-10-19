import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
    return (

        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand lead text-light" href="#">{props.headingTitle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {
                                props.createPortfolioButton &&
                                <button type="button" className="btn btn-primary btn-lg">Create Portfolio</button>
                            }
                        </li>
                    </ul>
                    <span className={`navbar-text lead text-light ${classes.welcomeText}`}>
                            Welcome, @prajwal!
                        </span>
                    <button type="button" className="btn btn-outline-primary">Logout</button>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;