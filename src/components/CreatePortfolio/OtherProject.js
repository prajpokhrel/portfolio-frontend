import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";

const OtherProject = () => {

    const [otherProject, setOtherProject] = useState({
        title: '',
        description : '',
        tools : '',
        github : '',
        demo : ''
    });

    const inputChangeHandler = (event) => {
        if (event.target.name === "tools") {
            setOtherProject({...otherProject, [event.target.name]: event.target.value.split("|")});
        } else {
            setOtherProject({...otherProject, [event.target.name]: event.target.value});
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/otherProject', otherProject,
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
                            <div className="col-sm-12">
                                <TextField fullWidth
                                           name="title"
                                           onChange={inputChangeHandler}
                                           label="Project Title"
                                           placeholder = "Enter your project title ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="description"
                                           onChange={inputChangeHandler}
                                           multiline
                                           maxRows={4}
                                           minRows={2}
                                           label="Description"
                                           placeholder = "Enter short project description ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="tools"
                                           onChange={inputChangeHandler}
                                           label="Technology and Tools"
                                           placeholder = "Python | Bootstrap | ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="github"
                                           onChange={inputChangeHandler}
                                           label="Github Link"
                                           placeholder = "Add a git repository of your project ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="demo"
                                           onChange={inputChangeHandler}
                                           label="Demo Link"
                                           placeholder = "Add a project hosted site ..."
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

export default OtherProject;