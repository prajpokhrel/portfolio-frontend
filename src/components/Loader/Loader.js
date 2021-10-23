import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader-container">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <h1 className="text-light lead">Gathering information... Please wait for a while...</h1>
        </div>
    );
};

export default Loader;