import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import SkillsForm from "../Forms/SkillsForm";
import PersonalInfoForm from "../Forms/PersonalInfoForm";

const Skills = () => {
    const [skills, setSkills] = useState({
        Languages: [],
        Frameworks: [],
        Tools: [],
        Design: []
    });


    const [renderState, setRenderState] = useState(true);
    const [toggleAddUpdate, setToggleAddUpdate] = useState(true);
    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/skills/${portfolioId}`,
                {withCredentials: true, credentials: "include"})
                .then((response) => {
                    if (response.data.length !== 0) {
                        setSkills(response.data[0]);
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
        const re = /\s*(?:;|$)\s*/;
        setSkills({...skills, [event.target.name]: event.target.value.split(re)});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/skills/${portfolioId}`, skills,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/skills/${id}`,
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

                            <SkillsForm formSubmit={formSubmitHandler}
                                        inputChange={inputChangeHandler}
                                        userData={skills}
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
                            {/*                        <span className="lead">Please separate your skills with <strong>"|"</strong>.</span><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   multiline*/}
                            {/*                                   name="languages"*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   label="Programming Languages"*/}
                            {/*                                   placeholder = "Java | Python | ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   multiline*/}
                            {/*                                   name="frameworks"*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   label="Frameworks"*/}
                            {/*                                   placeholder = "Angular | Express JS ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   multiline*/}
                            {/*                                   name="tools"*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   label="Tools"*/}
                            {/*                                   placeholder = "MongoDB | Postman | ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   multiline*/}
                            {/*                                   name="design"*/}
                            {/*                                   minRows={2}*/}
                            {/*                                   maxRows={4}*/}
                            {/*                                   label="Design"*/}
                            {/*                                   placeholder = "Figma | Sketch | ..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}


                            {/*                        <Button type="submit" variant="contained">save</Button>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </form>*/}
                            {/*        </>*/}
                            {/*        : updateData.map((data, index) => {*/}
                            {/*            return (*/}
                            {/*                <div className="row mb-3 singleData" key={data._id}>*/}
                            {/*                    <div className="col-sm-8 pt-2 pb-2 text-light">*/}
                            {/*                        <h3 className="text-info">Skills {index+1}</h3>*/}
                            {/*                        <h4><b>Programming Languages:</b> <span>{data.Languages}</span></h4>*/}
                            {/*                        <h4><b>Frameworks: </b> <span>{data.Frameworks}</span></h4>*/}
                            {/*                        <h4><b>Tools: </b> <span>{data.Tools}</span></h4>*/}
                            {/*                        <h4><b>Design: </b> <span>{data.Design}</span></h4>*/}
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
                    {/*            <span className="lead">Please separate your skills with <strong>"|"</strong>.</span><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       multiline*/}
                    {/*                       name="languages"*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       label="Programming Languages"*/}
                    {/*                       placeholder = "Java | Python | ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       multiline*/}
                    {/*                       name="frameworks"*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       label="Frameworks"*/}
                    {/*                       placeholder = "Angular | Express JS ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       multiline*/}
                    {/*                       name="tools"*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       label="Tools"*/}
                    {/*                       placeholder = "MongoDB | Postman | ..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       multiline*/}
                    {/*                       name="design"*/}
                    {/*                       minRows={2}*/}
                    {/*                       maxRows={4}*/}
                    {/*                       label="Design"*/}
                    {/*                       placeholder = "Figma | Sketch | ..."*/}
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

export default Skills;