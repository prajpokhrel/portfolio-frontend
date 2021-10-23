import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import OtherProjectForm from "../Forms/OtherProjectForm";
import FeaturedProjectForm from "../Forms/FeaturedProjectForm";


const OtherProject = () => {

    const [otherProject, setOtherProject] = useState({
        title: '',
        description : '',
        tools : '',
        github : '',
        demo : ''
    });

    const [updateData, setUpdateData] = useState([]);
    const [renderState, setRenderState] = useState(true);
    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/otherProject/${portfolioId}`,
                {withCredentials: true, credentials: "include"})
                .then((response) => {
                    setUpdateData(response.data);
                    console.log(response.data);
                }).catch((error) => {
                console.log(error.response);
            });
        };

        getData();
    }, [renderState]);

    const inputChangeHandler = (event) => {
        if (event.target.name === "tools") {
            const re = /\s*(?:;|$)\s*/;
            setOtherProject({...otherProject, [event.target.name]: event.target.value.split(re)});
        } else {
            setOtherProject({...otherProject, [event.target.name]: event.target.value});
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/otherProject/${portfolioId}`, otherProject,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/otherProject/${id}`,
                {withCredentials: true, credentials: "include"});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log("ERROR", error.response);
        }
    }

    return (
        <div>
            <div className="row mt-3">
                <div className="col-sm-10 m-auto">
                    <div className="row">
                        <div className="col-sm-12">
                            {updateData.length === 0 ? <p className="lead text-info"><b>You have not added any projects.</b></p> : null}
                            {
                                updateData.map((data, index) => {
                                    return (
                                        <div className="row mb-3 singleData" key={data._id}>
                                            <div className="col-sm-8 pt-2 pb-2 text-light">
                                                <h5 className="text-info">Other Project {index+1}</h5>
                                                <h6><b>Project Title:</b> <span>{data.title}</span></h6>
                                                <h6><b>Description:</b> <span>{data.description}</span></h6>
                                            </div>
                                            <div className="col-sm-4 pt-2 pb-2 text-light controlButtons">
                                                <Button onClick={() => dataDeleteHandler(data._id)} variant="contained" color="error">Delete</Button>
                                                {/*<ButtonGroup variant="contained">*/}
                                                {/*    <Button color="error">Delete</Button>*/}
                                                {/*</ButtonGroup>*/}
                                            </div>
                                        </div>
                                    );
                                })
                            }

                            <OtherProjectForm formSubmit={formSubmitHandler}
                                              inputChange={inputChangeHandler}
                                              userData={otherProject}
                            />

                            {/*<>*/}
                            {/*    {updateData.length === 0 ? <p className="lead text-warning">Please add your work experience.</p> : null}*/}
                            {/*    <form onSubmit={formSubmitHandler}>*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-sm-12">*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="title"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           label="Project Title"*/}
                            {/*                           placeholder = "Enter your project title ..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="description"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           multiline*/}
                            {/*                           maxRows={4}*/}
                            {/*                           minRows={2}*/}
                            {/*                           label="Description"*/}
                            {/*                           placeholder = "Enter short project description ..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="tools"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           label="Technology and Tools"*/}
                            {/*                           placeholder = "Python | Bootstrap | ..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="github"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           label="Github Link"*/}
                            {/*                           placeholder = "Add a git repository of your project ..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="demo"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           label="Demo Link"*/}
                            {/*                           placeholder = "Add a project hosted site ..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}

                            {/*                <Button type="submit" variant="contained">save</Button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</>*/}
                        </div>
                    </div>
                    {/*<form onSubmit={formSubmitHandler}>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-sm-12">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="title"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Project Title"*/}
                    {/*                       placeholder = "Enter your project title ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="description"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       multiline*/}
                    {/*                       maxRows={4}*/}
                    {/*                       minRows={2}*/}
                    {/*                       label="Description"*/}
                    {/*                       placeholder = "Enter short project description ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="tools"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Technology and Tools"*/}
                    {/*                       placeholder = "Python | Bootstrap | ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="github"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Github Link"*/}
                    {/*                       placeholder = "Add a git repository of your project ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="demo"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Demo Link"*/}
                    {/*                       placeholder = "Add a project hosted site ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}

                    {/*            <Button type="submit" variant="contained">save</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
};

export default OtherProject;