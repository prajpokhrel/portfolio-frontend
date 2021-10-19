import React, {useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";

const FeaturedProject = () => {
    const [featuredProject, setFeaturedProject] = useState({
        title : '',
        description : '',
        tools : '',
        projectImage : '',
        github : '',
        demo : ''
    });

    const inputChangeHandler = (event) => {
        if (event.target.name === "tools") {
            setFeaturedProject({...featuredProject, [event.target.name]: event.target.value.split("|")});
        } else {
            setFeaturedProject({...featuredProject, [event.target.name]: event.target.value});
        }
    };

    const fileSelectHandler = (event) => {
        setFeaturedProject({...featuredProject, projectImage: event.target.files[0]});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', featuredProject.title);
            formData.append('description', featuredProject.description);
            formData.append('tools', featuredProject.tools);
            formData.append('projectImage', featuredProject.projectImage, featuredProject.projectImage.name);
            formData.append('github', featuredProject.github);
            formData.append('demo', featuredProject.demo);
            const response = await axios.post('/featuredProject', formData,
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
                                <span className="lead">Project UI Image</span><br/>
                                <TextField fullWidth
                                           type="file"
                                           name="projectImage"
                                           onChange={fileSelectHandler}
                                           accept="image/png, image/gif, image/jpeg"
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="github"
                                           label="Github Link"
                                           onChange={inputChangeHandler}
                                           placeholder = "Add a git repository of your project ..."
                                           variant="standard" /><br/><br/>
                                <TextField fullWidth
                                           name="demo"
                                           label="Demo Link"
                                           onChange={inputChangeHandler}
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

export default FeaturedProject;