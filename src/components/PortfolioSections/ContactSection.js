import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import Button from "@mui/material/Button";

const ContactSection = ({contactDetails}) => {

    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 contact-contents m-auto">
                        <h4>What's Next?</h4>
                        <h1 className="display-4">Get In Touch</h1>
                        <p className="contact-description">
                            {contactDetails[0].statusDescription}
                        </p>
                        <div className="contact-button">
                            <Button variant="outlined" size="large">Say Hello</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;