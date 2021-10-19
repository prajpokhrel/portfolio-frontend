import React, {useState} from "react";
import classes from "./Login.module.css";
import axios from "../../../axios-portfolio";
import {useHistory} from "react-router-dom";

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

            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };


    return (
        <div className={classes.LoginContainer}>
            <div className={classes.formContainer}>

                <form onSubmit={loginHandler}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" onChange={inputChangedHandler} className="form-control" id="email"
                               aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" onChange={inputChangedHandler} className="form-control" id="password" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Login;