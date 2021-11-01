import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import Button from "@mui/material/Button";
import "./CreatePortfolio.css";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import ExperienceForm from "../Forms/ExperienceForm";
import CommonModal from "../Modal/CommonModal";

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

    const [showModal, setShowModal] = useState(false);
    const [errorLog, setErrorLog] = useState('');

    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/experience/${portfolioId}`,
                {withCredentials: true, credentials: 'include'})
                .then((response) => {
                    setUpdateData(response.data);
                    // console.log(response.data);
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

    const handleModalToggle = () => setShowModal(!showModal);

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/experience/${portfolioId}`, experience,
                {withCredentials: true, credentials: 'include'});
            // console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            // console.log(error.response.data);
            setErrorLog(error.response.data);
            setShowModal(!showModal);
        }
    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/experience/${id}`,
                {withCredentials: true, credentials: 'include'});
            // console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log("ERROR", error.response);
        }
    }

    return (
        <div>
            <CommonModal errorTitle={true}
                         modalName="Oops! Something went wrong."
                         createPortfolioModal={handleModalToggle}
                         show={showModal}>
                {errorLog}
            </CommonModal>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;