import React, {useState} from "react";
import classes from "./Registration.module.css";
import axios from "../../../axios-portfolio";
import { useHistory } from "react-router-dom";

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
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" onChange={inputChangedHandler} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="userName" onChange={inputChangedHandler} className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" onChange={inputChangedHandler} className="form-control" id="email"
                               aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else. Promise.!
                        </div>
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

export default Registration;