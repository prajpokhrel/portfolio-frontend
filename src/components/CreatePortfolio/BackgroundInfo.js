import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";

const BackgroundInfo = () => {

    const [backgroundInfo, setBackgroundInfo] = useState({
        currentWork : '',
        previousEducation : '',
        currentJobDescription : '',
        outsideActivities : ''
    });

    const inputChangeHandler = (event) => {
        setBackgroundInfo({...backgroundInfo, [event.target.name]: event.target.value});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/backgroundInfo', backgroundInfo,
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
                                           multiline
                                           minRows={2}
                                           maxRows={4}
                                           onChange={inputChangeHandler}
                                           name="currentWork"
                                           label="Describe Your workplace"
                                           placeholder = "I'm currently an Engineer at ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           id="outlined-basic"
                                           multiline
                                           minRows={2}
                                           maxRows={4}
                                           onChange={inputChangeHandler}
                                           name="previousEducation"
                                           label="Describe Current/Previous Education"
                                           placeholder = "I recently graduated from ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           id="outlined-basic"
                                           multiline
                                           minRows={2}
                                           maxRows={4}
                                           onChange={inputChangeHandler}
                                           name="currentJobDescription"
                                           label="Describe Current Work"
                                           placeholder = "As a software engineer ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           id="outlined-basic"
                                           multiline
                                           minRows={2}
                                           maxRows={4}
                                           onChange={inputChangeHandler}
                                           name="outsideActivities"
                                           label="Other Hobbies"
                                           placeholder = "When I am not in front of a computer screen ..."
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

export default BackgroundInfo;