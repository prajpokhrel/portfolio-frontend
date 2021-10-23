import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./CreatePortfolio.css";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import ExperienceForm from "../Forms/ExperienceForm";

const Experience = () => {

    const [experience, setExperience] = useState({
        jobTitle : '',
        employer : '',
        jobDescription : [],
        place : '',
        startDate : '',
        endDate : ''
    });

    const [updateData, setUpdateData] = useState([]);
    const [renderState, setRenderState] = useState(true);
    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/experience/${portfolioId}`,
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
        if (event.target.name === "jobDescription") {
            const re = /\s*(?:;|$)\s*/;
            setExperience({...experience, [event.target.name]: event.target.value.split(re)});
        } else {
            setExperience({...experience, [event.target.name]: event.target.value});
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/experience/${portfolioId}`, experience,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/experience/${id}`,
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
                            {updateData.length === 0 ? <p className="lead text-info"><b>You have not added any work experience.</b></p> : null}
                            {
                                updateData.map((data, index) => {
                                    return (
                                        <div className="row mb-3 singleData" key={data._id}>
                                            <div className="col-sm-8 pt-2 pb-2 text-light">
                                                <h5 className="text-info">Work Experience {index+1}</h5>
                                                <h6><b>Job Title:</b> <span>{data.jobTitle}</span></h6>
                                                <h6><b>Employer:</b> <span>{data.employer}</span></h6>
                                            </div>
                                            <div className="col-sm-4 pt-2 pb-2 text-light controlButtons">
                                                <Button onClick={() => dataDeleteHandler(data._id)} variant="contained" color="error">Delete</Button>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                            <ExperienceForm formSubmit={formSubmitHandler}
                                            inputChange={inputChangeHandler}
                                            userData={experience}
                            />
                            {/*<>*/}
                            {/*    {*/}
                            {/*        props.userData.firstName === ""*/}
                            {/*            ? <p className="lead text-info"><b>Please fill your personal information.</b></p>*/}
                            {/*            : <p className="lead text-info"><b>Please update your personal information.</b></p>*/}
                            {/*    }*/}
                            {/*    <form onSubmit={formSubmitHandler}>*/}
                            {/*        <div className="row">*/}
                            {/*            <span className="lead">*/}
                            {/*                <span className="text-danger"><b>*Important:</b></span> Please separate your Job Description with "<b>;</b>".*/}
                            {/*            </span><br/>*/}
                            {/*            <div className="col-sm-6">*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           label="Job Title"*/}
                            {/*                           name="jobTitle"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           placeholder = "Enter your job title..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="employer"*/}
                            {/*                           label="Employer"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           placeholder = "Enter your employer..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="jobDescription"*/}
                            {/*                           multiline*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           minRows={2}*/}
                            {/*                           maxRows={5}*/}
                            {/*                           label="Job Description"*/}
                            {/*                           placeholder = "Please separate each points with ; ..."*/}
                            {/*                           variant="standard" />*/}
                            {/*            </div>*/}
                            {/*            <div className="col-sm-6">*/}
                            {/*                <TextField fullWidth*/}
                            {/*                           required*/}
                            {/*                           name="place"*/}
                            {/*                           onChange={inputChangeHandler}*/}
                            {/*                           label="Address"*/}
                            {/*                           placeholder = "Enter your company address..."*/}
                            {/*                           variant="standard" /><br/><br/>*/}
                            {/*                <label htmlFor="start">Start Date:</label><br/>*/}
                            {/*                <input*/}
                            {/*                    type="date"*/}
                            {/*                    required*/}
                            {/*                    name="startDate"*/}
                            {/*                    onChange={inputChangeHandler}*/}
                            {/*                    id="start" /><br/><br/>*/}

                            {/*                <label htmlFor="end">End Date:</label><br/>*/}
                            {/*                <input*/}
                            {/*                    type="date"*/}
                            {/*                    name="endDate"*/}
                            {/*                    onChange={inputChangeHandler}*/}
                            {/*                    id="end"/><br/><br/>*/}
                            {/*            </div>*/}
                            {/*        </div><br/>*/}
                            {/*        <Button type="submit" variant="contained">save</Button>*/}
                            {/*    </form>*/}
                            {/*</>*/}
                        </div>
                    </div>
                    {/*<form onSubmit={formSubmitHandler}>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-sm-6">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       label="Job Title"*/}
                    {/*                       name="jobTitle"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       placeholder = "Enter your job title..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="employer"*/}
                    {/*                       label="Employer"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       placeholder = "Enter your employer..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="jobDescription"*/}
                    {/*                       multiline*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={5}*/}
                    {/*                       label="Job Description"*/}
                    {/*                       placeholder = "Please separate each points with | ..."*/}
                    {/*                       variant="standard" />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-sm-6">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="place"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Address"*/}
                    {/*                       placeholder = "Enter your company address..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <label htmlFor="start">Start Date:</label><br/>*/}
                    {/*            <input*/}
                    {/*                type="date"*/}
                    {/*                required*/}
                    {/*                name="startDate"*/}
                    {/*                onChange={inputChangeHandler}*/}
                    {/*                id="start" /><br/><br/>*/}

                    {/*            <label htmlFor="end">End Date:</label><br/>*/}
                    {/*            <input*/}
                    {/*                type="date"*/}
                    {/*                name="endDate"*/}
                    {/*                onChange={inputChangeHandler}*/}
                    {/*                id="end"/><br/><br/>*/}
                    {/*        </div>*/}
                    {/*    </div><br/>*/}
                    {/*    <Button type="submit" variant="contained">save</Button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
};

export default Experience;