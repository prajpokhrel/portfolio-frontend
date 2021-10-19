import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";

const ContactStatus = () => {
    const [contactStatus, setContactStatus] = useState({
        statusDescription : ''
    });

    const inputChangeHandler = (event) => {
        setContactStatus({...contactStatus, [event.target.name]: event.target.value});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/contact', contactStatus,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div>
            <div className="row mt-3">
                <div className="col-sm-10 m-auto">
                    <form onSubmit={formSubmitHandler}>
                        <div className="row">
                            <div className="col-sm-12">
                                <TextField fullWidth
                                           name="statusDescription"
                                           onChange={inputChangeHandler}
                                           multiline
                                           minRows={3}
                                           maxRows={5}
                                           label="Contact Status Description"
                                           placeholder = "Although, I’m not currently looking for any new opportunities ..."
                                           variant="standard" /><br/><br/>

                                <Button type="submit" variant="contained">save</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactStatus;