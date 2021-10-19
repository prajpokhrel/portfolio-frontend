import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";

const PersonalInfo = () => {

    const [personalInfo, setPersonalInfo] = useState({
        firstName : '',
        lastName : '',
        email: '',
        bio: '',
        profileImage : ''
    });

    const inputChangeHandler = (event) => {
        setPersonalInfo({...personalInfo, [event.target.name]: event.target.value});
    };

    const fileSelectHandler = (event) => {
        setPersonalInfo({...personalInfo, profileImage: event.target.files[0]});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('firstName', personalInfo.firstName);
            formData.append('lastName', personalInfo.lastName);
            formData.append('email', personalInfo.email);
            formData.append('bio', personalInfo.bio);
            formData.append('profileImage', personalInfo.profileImage, personalInfo.profileImage.name);
            const response = await axios.post('/personalInfo', formData,
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
                            <div className="col-sm-6">
                                <TextField fullWidth
                                           name="firstName"
                                           onChange={inputChangeHandler}
                                           label="First Name"
                                           placeholder = "Enter your first name..."
                                           variant="standard" />
                            </div>
                            <div className="col-sm-6">
                                <TextField fullWidth
                                           name="lastName"
                                           onChange={inputChangeHandler}
                                           label="Last Name"
                                           placeholder = "Enter your last name..."
                                           variant="standard" />
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-sm-12">
                                <TextField fullWidth
                                           name="email"
                                           onChange={inputChangeHandler}
                                           type="email"
                                           label="E-Mail"
                                           placeholder = "Enter your email..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="bio"
                                           onChange={inputChangeHandler}
                                           label="Bio"
                                           placeholder = "Enter a killer statement about yourself..."
                                           variant="standard" /><br/><br/>
                                <span className="lead">Profile Picture</span><br/>
                                <TextField fullWidth
                                           name="profileImage"
                                           onChange={fileSelectHandler}
                                           accept="image/png, image/gif, image/jpeg"
                                           type="file"
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

export default PersonalInfo;