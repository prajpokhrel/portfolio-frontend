import React from "react";
import "../CreatePortfolio/CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactStatusForm = (props) => {
    return (
        <>
            {
                props.userData.statusDescription === ""
                    ? <p className="lead text-info"><b>Please fill your contact status.</b></p>
                    : <p className="lead text-info"><b>Please update your contact status.</b></p>
            }
            <form onSubmit={props.formSubmit}>
                <div className="row">
                    <div className="col-sm-12">
                        <TextField fullWidth
                                   required
                                   name="statusDescription"
                                   value={props.userData.statusDescription}
                                   onChange={props.inputChange}
                                   multiline
                                   minRows={3}
                                   maxRows={5}
                                   label="Contact Status Description"
                                   placeholder = "Although, I’m not currently looking for any new opportunities ..."
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

export default ContactStatusForm;