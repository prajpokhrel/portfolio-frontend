import React from "react";
import "./Loader.css";
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

const Loader = ({message, redirectButton}) => {

    const history = useHistory();

    const handleRedirectButtonClicked = () => {
        history.push('/profile');
    }

    return (
        <div className="loader-wrapper">
            <div className="loader-container">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <h1 className="text-light lead">{message}</h1><br/>
            {
                redirectButton && <Button onClick={handleRedirectButtonClicked} variant="contained" color="warning">Go to profile</Button>
            }
        </div>
    );
};

export default Loader;