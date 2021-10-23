import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import BackgroundInfoForm from "../Forms/BackgroundInfoForm";
import PersonalInfoForm from "../Forms/PersonalInfoForm";

const BackgroundInfo = () => {

    const [backgroundInfo, setBackgroundInfo] = useState({
        currentWork : '',
        previousEducation : '',
        currentJobDescription : '',
        outsideActivities : ''
    });

    const [renderState, setRenderState] = useState(true);
    const [toggleAddUpdate, setToggleAddUpdate] = useState(true);
    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/backgroundInfo/${portfolioId}`,
                {withCredentials: true, credentials: "include"})
                .then((response) => {
                    if (response.data.length !== 0) {
                        setBackgroundInfo(response.data[0]);
                        setToggleAddUpdate(false);
                    } else {
                        setToggleAddUpdate(true);
                    }
                    console.log(response.data);
                }).catch((error) => {
                console.log(error.response);
            });
        };

        getData();
    }, [renderState]);

    const inputChangeHandler = (event) => {
        setBackgroundInfo({...backgroundInfo, [event.target.name]: event.target.value});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/backgroundInfo/${portfolioId}`, backgroundInfo,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
        }

    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/backgroundInfo/${id}`,
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

                            <BackgroundInfoForm formSubmit={formSubmitHandler}
                                                inputChange={inputChangeHandler}
                                                userData={backgroundInfo}
                                                toggleButton={toggleAddUpdate}
                            />

                            {/*{*/}
                            {/*    updateData.length === 0*/}
                            {/*        ?*/}
                            {/*        <>*/}
                            {/*            <p className="lead text-warning">You haven't filled your personal information yet.</p>*/}
                            {/*            <form onSubmit={formSubmitHandler}>*/}
                            {/*                <div className="row">*/}
                            {/*                    <div className="col-sm-12">*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   multiline*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   name="currentWork"*/}
                            {/*                                   label="Describe Your workplace"*/}
                            {/*                                   placeholder = "I'm currently an Engineer at ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   id="outlined-basic"*/}
                            {/*                                   multiline*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   name="previousEducation"*/}
                            {/*                                   label="Describe Current/Previous Education"*/}
                            {/*                                   placeholder = "I recently graduated from ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   id="outlined-basic"*/}
                            {/*                                   multiline*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   name="currentJobDescription"*/}
                            {/*                                   label="Describe Current Work"*/}
                            {/*                                   placeholder = "As a software engineer ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   id="outlined-basic"*/}
                            {/*                                   multiline*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   name="outsideActivities"*/}
                            {/*                                   label="Other Hobbies"*/}
                            {/*                                   placeholder = "When I am not in front of a computer screen ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}

                            {/*                        <Button type="submit" variant="contained">save</Button>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </form>*/}
                            {/*        </>*/}
                            {/*        : updateData.map((data) => {*/}
                            {/*            return (*/}
                            {/*                <div className="row mb-3 singleData" key={data._id}>*/}
                            {/*                    <div className="col-sm-8 pt-2 pb-2 text-light">*/}
                            {/*                        <h3 className="text-info">Background Information:</h3>*/}
                            {/*                        <h4><b>Current Work Info:</b> <span>{data.currentWork}</span></h4>*/}
                            {/*                        <h4><b>Previous Education Info:</b> <span>{data.previousEducation}</span></h4>*/}
                            {/*                        <h4><b>Current Job Info:</b> <span>{data.currentJobDescription}</span></h4>*/}
                            {/*                        <h4><b>Outside Activites Info:</b> <span>{data.outsideActivities}</span></h4>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="col-sm-4 pt-2 pb-2 text-light controlButtons">*/}
                            {/*                        <Button onClick={dataDeleteHandler} variant="contained" color="error">Delete</Button>*/}
                            {/*                        /!*<ButtonGroup variant="contained">*!/*/}
                            {/*                        /!*    <Button color="error">Delete</Button>*!/*/}
                            {/*                        /!*</ButtonGroup>*!/*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            );*/}
                            {/*        })*/}
                            {/*}*/}
                        </div>
                    </div>
                    {/*<form onSubmit={formSubmitHandler}>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-sm-12">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       multiline*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       name="currentWork"*/}
                    {/*                       label="Describe Your workplace"*/}
                    {/*                       placeholder = "I'm currently an Engineer at ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       id="outlined-basic"*/}
                    {/*                       multiline*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       name="previousEducation"*/}
                    {/*                       label="Describe Current/Previous Education"*/}
                    {/*                       placeholder = "I recently graduated from ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       id="outlined-basic"*/}
                    {/*                       multiline*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       name="currentJobDescription"*/}
                    {/*                       label="Describe Current Work"*/}
                    {/*                       placeholder = "As a software engineer ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       id="outlined-basic"*/}
                    {/*                       multiline*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       name="outsideActivities"*/}
                    {/*                       label="Other Hobbies"*/}
                    {/*                       placeholder = "When I am not in front of a computer screen ..."*/}
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

export default BackgroundInfo;