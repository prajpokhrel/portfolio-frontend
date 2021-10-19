import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CreatePortfolio.css";
import axios from "../../axios-portfolio";

const Experience = () => {

    const [experience, setExperience] = useState({
        jobTitle : '',
        employer : '',
        jobDescription : [],
        place : '',
        startDate : '',
        endDate : ''
    });

    const inputChangeHandler = (event) => {
        if (event.target.name === "jobDescription") {
            setExperience({...experience, [event.target.name]: event.target.value.split("|")});
        } else {
            setExperience({...experience, [event.target.name]: event.target.value});
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/experience', experience,
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
                                           label="Job Title"
                                           name="jobTitle"
                                           onChange={inputChangeHandler}
                                           placeholder = "Enter your job title..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="employer"
                                           label="Employer"
                                           onChange={inputChangeHandler}
                                           placeholder = "Enter your employer..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="jobDescription"
                                           multiline
                                           onChange={inputChangeHandler}
                                           minRows={2}
                                           maxRows={5}
                                           label="Job Description"
                                           placeholder = "Please separate each points with | ..."
                                           variant="standard" />
                            </div>
                            <div className="col-sm-6">
                                <TextField fullWidth
                                           name="place"
                                           onChange={inputChangeHandler}
                                           label="Address"
                                           placeholder = "Enter your company address..."
                                           variant="standard" /><br/><br/>
                                <label htmlFor="start">Start Date:</label><br/>
                                <input
                                    type="date"
                                    name="startDate"
                                    onChange={inputChangeHandler}
                                    id="start" /><br/><br/>

                                <label htmlFor="end">End Date:</label><br/>
                                <input
                                    type="date"
                                    name="endDate"
                                    onChange={inputChangeHandler}
                                    id="end"/><br/><br/>
                            </div>
                        </div><br/>
                        <Button type="submit" variant="contained">save</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Experience;