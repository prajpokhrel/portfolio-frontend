import React from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const OtherProjectForm = (props) => {
    return (
        <>
            <p className="lead text-info"><b>Please add your projects.</b></p>
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <span className="lead">
                        <span className="text-danger"><b>*Important:</b></span> Please separate your Tools with "<b>;</b>".
                    </span><br/>
                    <div className="col-sm-12">
                        <TextField fullWidth
                                   required
                                   name="title"
                                   onChange={props.inputChange}
                                   label="Project Title"
                                   placeholder = "Enter your project title ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="description"
                                   onChange={props.inputChange}
                                   multiline
                                   maxRows={4}
                                   minRows={2}
                                   label="Description"
                                   placeholder = "Enter short project description ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="tools"
                                   onChange={props.inputChange}
                                   label="Technology and Tools"
                                   placeholder = "Python; Bootstrap; ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="github"
                                   onChange={props.inputChange}
                                   label="Github Link"
                                   placeholder = "Add a git repository of your project ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="demo"
                                   onChange={props.inputChange}
                                   label="Demo Link"
                                   placeholder = "Add a project hosted site ..."
                                   variant="standard" /><br/><br/>

                        <Button type="submit" variant="contained">save</Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default OtherProjectForm;