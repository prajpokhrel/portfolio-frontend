import React from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PersonalInfoForm = (props) => {
    return (
        <>
            {
                props.userData.firstName === ""
                    ? <p className="lead text-info"><b>Please fill your personal information.</b></p>
                    : <p className="lead text-info"><b>Please update your personal information.</b></p>
            }
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <TextField fullWidth
                                   required
                                   value={props.userData.firstName}
                                   name="firstName"
                                   onChange={props.inputChange}
                                   label="First Name"
                                   placeholder = "Enter your first name..."
                                   variant="standard" />
                    </div>
                    <div className="col-sm-6">
                        <TextField fullWidth
                                   required
                                   value={props.userData.lastName}
                                   name="lastName"
                                   onChange={props.inputChange}
                                   label="Last Name"
                                   placeholder = "Enter your last name..."
                                   variant="standard" />
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-12">
                        <TextField fullWidth
                                   required
                                   value={props.userData.email}
                                   name="email"
                                   onChange={props.inputChange}
                                   type="email"
                                   label="E-Mail"
                                   placeholder = "Enter your email..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   value={props.userData.bio}
                                   name="bio"
                                   onChange={props.inputChange}
                                   label="Bio"
                                   placeholder = "Enter a killer statement about yourself..."
                                   variant="standard" /><br/><br/>
                        <span className="lead">Profile Picture</span><br/>
                        <TextField fullWidth
                                   required
                                   name="profileImage"
                                   onChange={props.fileSelect}
                                   accept="image/png, image/gif, image/jpeg"
                                   type="file"
                                   variant="standard" /><br/><br/>
                        {
                            props.imagePreview && typeof props.userData.profileImage === 'string' &&
                                <>
                                    <div className="col-sm-2">
                                        <img className="rounded img-fluid"
                                             src={`http://localhost:5000/${props.userData.profileImage}`}
                                             alt="Personal Profile Picture" />
                                    </div>
                                </>
                        }
                        {
                            props.toggleButton
                                ? <Button className="mt-3" type="submit" variant="contained">save</Button>
                                : <Button className="mt-3" onClick={() => props.formUpdate(props.userData._id)} variant="contained">Update</Button>
                        }
                    </div>
                </div>
            </form>
        </>
    );
};

export default PersonalInfoForm;