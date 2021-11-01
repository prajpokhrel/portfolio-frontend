import React, {useEffect} from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SkillsForm = (props) => {

    return (
        <>
            {
                props.userData.Languages.length === 0
                    ? <p className="lead text-info"><b>Please add your skills.</b></p>
                    : <p className="lead text-info"><b>Please update your skills.</b></p>
            }
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <div className="col-sm-12">
                        <span className="lead">
                            <span className="text-danger"><b>*Important:</b></span> Please separate your skills with "<b>;</b>".
                        </span><br/>
                        <TextField fullWidth
                                   required
                                   onChange={props.inputChange}
                                   value={props.userData.Languages.join(";")}
                                   multiline
                                   name="Languages"
                                   minRows={2}
                                   maxRows={4}
                                   label="Programming Languages"
                                   placeholder = "Java; Python; ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   onChange={props.inputChange}
                                   multiline
                                   name="Frameworks"
                                   value={props.userData.Frameworks.join(";")}
                                   minRows={2}
                                   maxRows={4}
                                   label="Frameworks"
                                   placeholder = "Angular; Express JS; ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   onChange={props.inputChange}
                                   multiline
                                   value={props.userData.Tools.join(";")}
                                   name="Tools"
                                   minRows={2}
                                   maxRows={4}
                                   label="Tools"
                                   placeholder = "MongoDB; Postman; ..."
                                   variant="standard" /><br/><br/>
                        <TextField fullWidth
                                   required
                                   onChange={props.inputChange}
                                   multiline
                                   value={props.userData.Design.join(";")}
                                   name="Design"
                                   minRows={2}
                                   maxRows={4}
                                   label="Design"
                                   placeholder = "Figma; Sketch; ..."
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

export default SkillsForm;