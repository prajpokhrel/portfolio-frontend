import React, {useState, useEffect} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import PersonalInfoForm from "../Forms/PersonalInfoForm";

const PersonalInfo = () => {

    const [personalInfo, setPersonalInfo] = useState({
        firstName : '',
        lastName : '',
        email: '',
        bio: '',
        profileImage : ''
    });

    const [renderState, setRenderState] = useState(true);
    const [toggleAddUpdate, setToggleAddUpdate] = useState(true);
    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/personalInfo/${portfolioId}`,
                {withCredentials: true, credentials: "include"})
                .then((response) => {
                    if (response.data.length !== 0) {
                        setPersonalInfo(response.data[0]);
                        setToggleAddUpdate(false);
                    } else {
                        setToggleAddUpdate(true);
                    }
                    console.log(response.data);
                    // setUpdateData(response.data);
                }).catch((error) => {
                    console.log(error.response);
            });
        };

        getData();
    }, [renderState]);

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/personalInfo/${id}`,
                {withCredentials: true, credentials: "include"});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log("ERROR", error.response);
        }
    }

    const inputChangeHandler = (event) => {
        setPersonalInfo({...personalInfo, [event.target.name]: event.target.value});
    };

    const fileSelectHandler = (event) => {
        setPersonalInfo({...personalInfo, profileImage: event.target.files[0]});
    };

    const formSubmitHandler = async (event) => {
        // data save garne button click vayesi 1second ko loader rakhda hunxa
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('firstName', personalInfo.firstName);
            formData.append('lastName', personalInfo.lastName);
            formData.append('email', personalInfo.email);
            formData.append('bio', personalInfo.bio);
            formData.append('profileImage', personalInfo.profileImage, personalInfo.profileImage.name);
            const response = await axios.post(`/personalInfo/${portfolioId}`, formData,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div>
            <div className="row mt-3">
                <div className="col-sm-10 m-auto">
                    <div className="row">
                        <div className="col-sm-12">

                            <PersonalInfoForm formSubmit={formSubmitHandler}
                                              inputChange={inputChangeHandler}
                                              fileSelect={fileSelectHandler}
                                              userData={personalInfo}
                                              toggleButton={toggleAddUpdate}
                            />

                            {/*{*/}
                            {/*    updateData.length === 0*/}
                            {/*        ?*/}
                            {/*        <>*/}
                            {/*            <p className="lead text-warning">You haven't filled your personal information yet.</p>*/}
                            {/*            <form onSubmit={formSubmitHandler}>*/}
                            {/*                <div className="row">*/}
                            {/*                    <div className="col-sm-6">*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   name="firstName"*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   label="First Name"*/}
                            {/*                                   placeholder = "Enter your first name..."*/}
                            {/*                                   variant="standard" />*/}
                            {/*                    </div>*/}
                            {/*                    <div className="col-sm-6">*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   name="lastName"*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   label="Last Name"*/}
                            {/*                                   placeholder = "Enter your last name..."*/}
                            {/*                                   variant="standard" />*/}
                            {/*                    </div>*/}
                            {/*                </div><br/>*/}
                            {/*                <div className="row">*/}
                            {/*                    <div className="col-sm-12">*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   name="email"*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   type="email"*/}
                            {/*                                   label="E-Mail"*/}
                            {/*                                   placeholder = "Enter your email..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   name="bio"*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   label="Bio"*/}
                            {/*                                   placeholder = "Enter a killer statement about yourself..."*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <span className="lead">Profile Picture</span><br/>*/}
                            {/*                        <TextField fullWidth*/}
                            {/*                                   required*/}
                            {/*                                   name="profileImage"*/}
                            {/*                                   onChange={fileSelectHandler}*/}
                            {/*                                   accept="image/png, image/gif, image/jpeg"*/}
                            {/*                                   type="file"*/}
                            {/*                                   variant="standard" /><br/><br/>*/}
                            {/*                        <Button disabled={updateData.length !== 0} type="submit" variant="contained">save</Button>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </form>*/}
                            {/*        </>*/}
                            {/*        : updateData.map((data) => {*/}
                            {/*            return (*/}
                            {/*                <div className="row mb-3 singleData" key={data._id}>*/}
                            {/*                    <div className="col-sm-8 pt-2 pb-2 text-light">*/}
                            {/*                        <h3 className="text-info">Personal Information:</h3>*/}
                            {/*                        <h4><b>Full Name:</b> <span>{data.firstName} {data.lastName}</span></h4>*/}
                            {/*                        <h4><b>E-Mail:</b> <span>{data.email}</span></h4>*/}
                            {/*                        <h4><b>Bio:</b> <span>{data.bio}</span></h4>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="col-sm-4 pt-2 pb-2 text-light controlButtons">*/}
                            {/*                        <Button onClick={() => dataDeleteHandler(data._id)} variant="contained" color="error">Delete</Button>*/}
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
                    {/*        <div className="col-sm-6">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="firstName"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="First Name"*/}
                    {/*                       placeholder = "Enter your first name..."*/}
                    {/*                       variant="standard" />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-sm-6">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="lastName"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Last Name"*/}
                    {/*                       placeholder = "Enter your last name..."*/}
                    {/*                       variant="standard" />*/}
                    {/*        </div>*/}
                    {/*    </div><br/>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-sm-12">*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="email"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       type="email"*/}
                    {/*                       label="E-Mail"*/}
                    {/*                       placeholder = "Enter your email..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="bio"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       label="Bio"*/}
                    {/*                       placeholder = "Enter a killer statement about yourself..."*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <span className="lead">Profile Picture</span><br/>*/}
                    {/*            <TextField fullWidth*/}
                    {/*                       required*/}
                    {/*                       name="profileImage"*/}
                    {/*                       onChange={fileSelectHandler}*/}
                    {/*                       accept="image/png, image/gif, image/jpeg"*/}
                    {/*                       type="file"*/}
                    {/*                       variant="standard" /><br/><br/>*/}
                    {/*            <Button disabled={updateData.length !== 0} type="submit" variant="contained">save</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;