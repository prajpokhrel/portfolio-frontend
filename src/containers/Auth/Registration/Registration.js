import React, {useEffect, useState} from "react";
import classes from "./Registration.module.css";
import axios from "../../../axios-portfolio";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Registration = () => {

    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: ''
    });

    const [formError, setFormError] = useState({
        name: '',
        userName: '',
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const initialState = {
        name: '', userName: '', email: '', password: ''
    }

    const history = useHistory();

    const registerHandler = async (event) => {
        event.preventDefault();
        try  {

            const response = await axios.post('/users/', formData,
                {withCredentials: true, credentials: 'include'});
            // console.log(response.data);
            history.push('/auth/login');

        } catch (error) {
            // console.log(error.response.data);
            if (typeof error.response.data === 'object') {
                setFormError({...initialState, [error.response.data.context.key]: error.response.data.message  });
            } else {
                setFormError({...initialState, "email": error.response.data});
            }
        }
    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleCheckboxChecked = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={classes.RegistrationContainer}>
            {/* for now create a manual form, later replace by React React way*/}
            <div className={classes.formContainer}>
                <form onSubmit={registerHandler}>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   error={formError.name !== ''}
                                   helperText={formError.name}
                                   name="name"
                                   onChange={inputChangedHandler}
                                   label="Full Name"
                                   placeholder = "Enter your full name..."
                                   variant="standard" />
                    </div>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   error={formError.userName !== ''}
                                   helperText={formError.userName}
                                   name="userName"
                                   onChange={inputChangedHandler}
                                   label="Username"
                                   placeholder = "Enter your username..."
                                   variant="standard" />
                    </div>
                    <div className="mb-3 mt-3">
                        <TextField fullWidth
                                   required
                                   error={formError.email !== ''}
                                   helperText={formError.email}
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
                                   error={formError.password !== ''}
                                   helperText={formError.password}
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

export default Registration;