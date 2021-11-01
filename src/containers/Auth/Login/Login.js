import React, {useState} from "react";
import classes from "./Login.module.css";
import axios from "../../../axios-portfolio";
import {useHistory} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loginError, setLoginError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const history = useHistory();

    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/auth', formData);

            if (response) {
                history.push('/profile');
            }
        } catch (error) {
            // console.log(error.response.data);
            setLoginError(error.response.data);
        }
    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleCheckboxChecked = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className={classes.LoginContainer}>
            <div className={classes.formContainer}>

                <form onSubmit={loginHandler}>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   error={loginError !== ""}
                                   helperText={loginError}
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
                                   error={loginError !== ""}
                                   helperText={loginError}
                                   name="password"
                                   onChange={inputChangedHandler}
                                   label="Password"
                                   type={showPassword ? "text" : "password"}
                                   placeholder = "Enter your password..."
                                   variant="standard" />
                        <FormControlLabel
                            value="true"
                            control={<Checkbox onChange={handleCheckboxChecked} />}
                            label="Show Password"
                            labelPlacement="end"
                        />
                    </div>
                    <Button fullWidth variant="contained" type="submit">Submit</Button>
                </form>

            </div>
        </div>
    );
};

export default Login;