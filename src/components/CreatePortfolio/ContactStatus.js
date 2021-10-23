import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import ContactStatusForm from "../Forms/ContactStatusForm";
import PersonalInfoForm from "../Forms/PersonalInfoForm";

const ContactStatus = () => {
    const [contactStatus, setContactStatus] = useState({
        statusDescription : ''
    });

    const [renderState, setRenderState] = useState(true);
    const [toggleAddUpdate, setToggleAddUpdate] = useState(true);
    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/contact/${portfolioId}`,
                {withCredentials: true, credentials: "include"})
                .then((response) => {
                    if (response.data.length !== 0) {
                        setContactStatus(response.data[0]);
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
        setContactStatus({...contactStatus, [event.target.name]: event.target.value});
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/contact/${portfolioId}`, contactStatus,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/contact/${id}`,
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
                            <ContactStatusForm formSubmit={formSubmitHandler}
                                               inputChange={inputChangeHandler}
                                               userData={contactStatus}
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
                            {/*                                   name="statusDescription"*/}
                            {/*                                   onChange={inputChangeHandler}*/}
                            {/*                                   multiline*/}
                            {/*                                   minRows={3}*/}
                            {/*                                   maxRows={5}*/}
                            {/*                                   label="Contact Status Description"*/}
                            {/*                                   placeholder = "Although, I’m not currently looking for any new opportunities ..."*/}
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
                            {/*                        <h3 className="text-info">Contact Status:</h3>*/}
                            {/*                        <h4><b>Status:</b> <span>{data.statusDescription}</span></h4>*/}
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
                    {/*                       name="statusDescription"*/}
                    {/*                       onChange={inputChangeHandler}*/}
                    {/*                       multiline*/}
                    {/*                       minRows={3}*/}
                    {/*                       maxRows={5}*/}
                    {/*                       label="Contact Status Description"*/}
                    {/*                       placeholder = "Although, I’m not currently looking for any new opportunities ..."*/}
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

export default ContactStatus;