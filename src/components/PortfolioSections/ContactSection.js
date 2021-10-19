import React, {useEffect, useState} from "react";
import "../../containers/Portfolio/Portfolio.css";
import axios from "../../axios-portfolio";

const ContactSection = () => {

    const [contact, setContact] = useState({});

    useEffect(() => {
        const getContact = async () => {
            try {
                const response = await axios.get('/contact',
                    {withCredentials: true, credentials: 'include'});
                setContact(prevState => response.data);
                console.log("Contact", response.data);
            } catch (error) {
                console.log(error.response);
            }
        };

        getContact();
    }, []);

    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 contact-contents m-auto">
                        {/*  Thakka center everything  */}
                        <h4>What's Next?</h4>
                        <h1 className="display-4">Get In Touch</h1>
                        <p className="contact-description">
                            Although I’m not currently looking for any new opportunities,
                            my inbox is always open. Whether you have a question or just
                            want to say hi, I’ll try my best to get back to you!
                        </p>
                        <div className="contact-button">
                            {/*  Add mail to button  */}
                            <button type="button" className="btn btn-outline-primary">Say Hello</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;