import React from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ExperienceForm = (props) => {
    return (
        <>
            <p className="lead text-info"><b>Please add your work experience. [From Newest to Oldest.]</b></p>
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <span className="lead">
                        <span className="text-danger"><b>*Important:</b></span> Please separate your Job Description with "<b>;</b>".
                    </span><br/>
                    <div className="col-sm-6">
                        <TextField fullWidth
                                   required
                                   label="Job Title"
                                   name="jobTitle"
                                   onChange={props.inputChange}
                                   placeholder = "Enter your job title..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="employer"
                                   label="Employer"
                                   onChange={props.inputChange}
                                   placeholder = "Enter your employer..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="jobDescription"
                                   multiline
                                   onChange={props.inputChange}
                                   minRows={2}
                                   maxRows={5}
                                   label="Job Description"
                                   placeholder = "Please separate each points with ; ..."
                                   variant="standard" />
                    </div>
                    <div className="col-sm-6">
                        <TextField fullWidth
                                   required
                                   name="place"
                                   onChange={props.inputChange}
                                   label="Address"
                                   placeholder = "Enter your company address..."
                                   variant="standard" /><br/><br/>
                        <label htmlFor="start">Start Date:</label><br/>
                        <input
                            type="date"
                            required
                            name="startDate"
                            onChange={props.inputChange}
                            id="start" /><br/><br/>

                        <label htmlFor="end">End Date:</label><br/>
                        <input
                            type="date"
                            name="endDate"
                            onChange={props.inputChange}
                            id="end"/><br/><br/>
                    </div>
                </div><br/>
                <Button type="submit" variant="contained">save</Button>
            </form>
        </>
    );
}

export default ExperienceForm;