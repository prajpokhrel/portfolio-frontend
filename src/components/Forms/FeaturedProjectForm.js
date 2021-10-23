import React from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FeaturedProjectForm = (props) => {
    return (
        <>
            <p className="lead text-info"><b>Please add your featured projects.</b></p>
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <span className="lead">
                        <span className="text-danger"><b>*Important:</b></span> Please separate your Tools with "<b>;</b>".
                    </span><br/>
                    <div className="col-sm-12">
                        <TextField fullWidth
                                   name="title"
                                   required
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
                                   placeholder = "Python; Bootstrap; JavaScript ..."
                                   variant="standard" /><br/><br/>
                        <span className="lead">Project UI Image</span><br/>
                        <TextField fullWidth
                                   required
                                   type="file"
                                   name="projectImage"
                                   onChange={props.fileSelect}
                                   accept="image/png, image/gif, image/jpeg"
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="github"
                                   label="Github Link"
                                   onChange={props.inputChange}
                                   placeholder = "Add a git repository of your project ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   name="demo"
                                   label="Demo Link"
                                   onChange={props.inputChange}
                                   placeholder = "Add a project hosted site ..."
                                   variant="standard" /><br/><br/>

                        <Button type="submit" variant="contained">save</Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default FeaturedProjectForm;