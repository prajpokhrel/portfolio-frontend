import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import SkillsForm from "../Forms/SkillsForm";
import CommonModal from "../Modal/CommonModal";

const Skills = () => {
    const [skills, setSkills] = useState({
        Languages: [],
        Frameworks: [],
        Tools: [],
        Design: []
    });


    const [renderState, setRenderState] = useState(true);
    const [toggleAddUpdate, setToggleAddUpdate] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [errorLog, setErrorLog] = useState('');

    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/skills/${portfolioId}`,
                {withCredentials: true})
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
        // const re = /\s*(?:;|$)\s*/;
        setSkills({...skills, [event.target.name]: event.target.value.split(';')});
    };

    const handleModalToggle = () => setShowModal(!showModal);

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(skills);

        try {
            const response = await axios.post(`/skills/${portfolioId}`, skills,
                {withCredentials: true});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
            setErrorLog(error.response.data);
            setShowModal(!showModal);
        }
    };

    const formUpdateHandler = async (id) => {
        console.log(skills);
        try {
            const response = await axios.patch(`/skills/${id}`, skills,
                {withCredentials: true});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
            setErrorLog(error.response.data);
            setShowModal(!showModal);
        }
    };

    const dataDeleteHandler = async (id) => {
        try {
            const response = await axios.delete(`/skills/${id}`,
                {withCredentials: true});
            console.log(response.data);
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

                            <SkillsForm formSubmit={formSubmitHandler}
                                        inputChange={inputChangeHandler}
                                        formUpdate={formUpdateHandler}
                                        userData={skills}
                                        toggleButton={toggleAddUpdate}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;