import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";

const Skills = () => {
    const [skills, setSkills] = useState({
        languages: [],
        frameworks: [],
        tools: [],
        design: []
    });

    const inputChangeHandler = (event) => {
        setSkills({...skills, [event.target.name]: event.target.value.split("|")});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/skills', skills,
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
                                <span className="lead">Please separate your skills with <strong>"|"</strong>.</span><br/>
                                <TextField fullWidth
                                           onChange={inputChangeHandler}
                                           multiline
                                           name="languages"
                                           minRows={2}
                                           maxRows={4}
                                           label="Programming Languages"
                                           placeholder = "Java | Python | ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           onChange={inputChangeHandler}
                                           multiline
                                           name="frameworks"
                                           minRows={2}
                                           maxRows={4}
                                           label="Frameworks"
                                           placeholder = "Angular | Express JS ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           onChange={inputChangeHandler}
                                           multiline
                                           name="tools"
                                           minRows={2}
                                           maxRows={4}
                                           label="Tools"
                                           placeholder = "MongoDB | Postman | ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           onChange={inputChangeHandler}
                                           multiline
                                           name="design"
                                           minRows={2}
                                           maxRows={4}
                                           label="Design"
                                           placeholder = "Figma | Sketch | ..."
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

export default Skills;