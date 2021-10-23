import React, {useEffect, useState} from "react";
import classes from "./Navigation.module.css";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";
import {Redirect, useHistory} from "react-router-dom";

const Navigation = (props) => {
    const [loggedOut, setLoggedOut] = useState(false);
    const history = useHistory();

    const logoutHandler = () => {
        axios.get('/users/logout', {withCredentials: true, credentials: "include"})
            .then((response) => {
                console.log(response.data);
                setLoggedOut(true);

                // can also do
                // history.push('/auth/login');
            })
            .catch((error) => {
                console.log(error.response);
            });
    }

    const nameClickHandler = () => {
        history.push('/profile');
    }

    return (
        <>
        {loggedOut && <Redirect to={"/auth/login"} />}
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
                                <Button variant="contained" size="large" onClick={props.createPortfolioModal}>Create Portfolio</Button>
                            }
                        </li>
                    </ul>
                    <span onClick={nameClickHandler} className={`navbar-text lead text-light ${classes.welcomeText}`}>
                            Welcome, @{props.loggedUserName}!
                        </span>
                    <Button onClick={logoutHandler} variant="outlined" color="error">Logout</Button>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navigation;