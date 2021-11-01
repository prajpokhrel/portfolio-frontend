import React from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const BackgroundInfoForm = (props) => {
    return (
        <>
            {
                props.userData.currentWork === ""
                    ? <p className="lead text-info"><b>Please fill your background information.</b></p>
                    : <p className="lead text-info"><b>Please update your background information.</b></p>
            }
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <div className="col-sm-12">
                        <TextField fullWidth
                                   required
                                   multiline
                                   minRows={2}
                                   maxRows={4}
                                   onChange={props.inputChange}
                                   name="currentWork"
                                   value={props.userData.currentWork}
                                   label="Describe Your workplace"
                                   placeholder = "I'm currently an Engineer at ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   id="outlined-basic"
                                   multiline
                                   minRows={2}
                                   maxRows={4}
                                   onChange={props.inputChange}
                                   name="previousEducation"
                                   value={props.userData.previousEducation}
                                   label="Describe Current/Previous Education"
                                   placeholder = "I recently graduated from ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   id="outlined-basic"
                                   multiline
                                   minRows={2}
                                   maxRows={4}
                                   onChange={props.inputChange}
                                   name="currentJobDescription"
                                   value={props.userData.currentJobDescription}
                                   label="Describe Current Work"
                                   placeholder = "As a software engineer ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   id="outlined-basic"
                                   multiline
                                   minRows={2}
                                   maxRows={4}
                                   onChange={props.inputChange}
                                   name="outsideActivities"
                                   value={props.userData.outsideActivities}
                                   label="Other Hobbies"
                                   placeholder = "When I am not in front of a computer screen ..."
                                   variant="standard" /><br/><br/>

                        {
                            props.toggleButton
                                ? <Button type="submit" variant="contained">save</Button>
                                : <Button onClick={() => props.formUpdate(props.userData._id)} variant="contained">Update</Button>
                        }
                    </div>
                </div>
            </form>
        </>
    );
}

export default BackgroundInfoForm;