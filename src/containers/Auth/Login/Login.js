import React, {useState} from "react";
import classes from "./Login.module.css";
import axios from "../../../axios-portfolio";
import {useHistory} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/auth', formData,
                {withCredentials: true, credentials: 'include'});

            if (response) {
                history.push('/profile');
            }
        } catch (error) {
            console.log(error.response.data);
            console.log("Sorry buddy...");
        }
    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };


    return (
        <div className={classes.LoginContainer}>
            <div className={classes.formContainer}>

                <form onSubmit={loginHandler}>
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

export default Login;