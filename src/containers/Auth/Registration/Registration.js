import React, {useState} from "react";
import classes from "./Registration.module.css";
import axios from "../../../axios-portfolio";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Registration = () => {

    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: ''
    });

    const history = useHistory();

    const registerHandler = async (event) => {
        event.preventDefault();

        try  {

            const response = await axios.post('/users/', formData,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            history.push('/auth/login');

        } catch (error) {
            console.log(error.response.data);
        }

        // console.log(formData);
    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <div className={classes.RegistrationContainer}>
            {/* for now create a manual form, later replace by React React way*/}
            <div className={classes.formContainer}>
                <form onSubmit={registerHandler}>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   name="name"
                                   onChange={inputChangedHandler}
                                   label="Full Name"
                                   placeholder = "Enter your full name..."
                                   variant="standard" />
                    </div>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   name="userName"
                                   onChange={inputChangedHandler}
                                   label="Username"
                                   placeholder = "Enter your username..."
                                   variant="standard" />
                    </div>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   name="email"
                                   onChange={inputChangedHandler}
                                   label="E-Mail"
                                   type="email"
                                   placeholder = "Enter your email..."
                                   variant="standard" />
                    </div>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   name="password"
                                   onChange={inputChangedHandler}
                                   label="Password"
                                   type="password"
                                   placeholder = "Enter your password..."
                                   variant="standard" />
                    </div>
                    <Button fullWidth variant="contained" type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Registration;