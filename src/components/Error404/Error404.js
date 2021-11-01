import React from "react";
import "./Error404.css";
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

const Error404 = () => {

    const history = useHistory();

    const handleRedirectButtonClicked = () => {
        history.push('/profile');
    }

    return (
        <div className="loader-wrapper">
            <div className="404-container">
                <h1 className="display-1 text-light">404! NOT FOUND</h1>
            </div>
            <h1 className="text-light lead">You didn't break the internet, but we can't find what you are looking for.</h1><br/>
            <Button onClick={handleRedirectButtonClicked} variant="contained" color="warning">Go to profile</Button>
        </div>
    );
};

export default Error404;