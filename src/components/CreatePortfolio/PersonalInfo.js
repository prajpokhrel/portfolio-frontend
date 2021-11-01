import React, {useState, useEffect} from "react";
import "./CreatePortfolio.css";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import PersonalInfoForm from "../Forms/PersonalInfoForm";
import CommonModal from "../Modal/CommonModal";

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
    const [imagePreview, setImagePreview] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [errorLog, setErrorLog] = useState('');

    const { portfolioId } = useParams();

    useEffect(() => {
        const getData = () => {
            axios.get(`/personalInfo/${portfolioId}`,
                {withCredentials: true, credentials: "include"})
                .then((response) => {
                    if (response.data.length !== 0) {
                        setPersonalInfo(response.data[0]);
                        setToggleAddUpdate(false);
                        setImagePreview(true);
                    } else {
                        setToggleAddUpdate(true);
                        setImagePreview(false);
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

    const handleModalToggle = () => setShowModal(!showModal);

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
            setErrorLog(error.response.data);
            setShowModal(!showModal);
        }
    };

    const formUpdateHandler = async (id) => {
        console.log(personalInfo);
        try {
            const formDataUpdate = new FormData();
            formDataUpdate.append('firstName', personalInfo.firstName);
            formDataUpdate.append('lastName', personalInfo.lastName);
            formDataUpdate.append('email', personalInfo.email);
            formDataUpdate.append('bio', personalInfo.bio);
            if (typeof personalInfo.profileImage !== 'string') {
                formDataUpdate.append('profileImage', personalInfo.profileImage, personalInfo.profileImage.name);
            }
            const response = await axios.patch(`/personalInfo/${id}`, formDataUpdate,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            setRenderState(!renderState);

        } catch (error) {
            console.log(error.response.data);
            setErrorLog(error.response.data);
            setShowModal(!showModal);
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

                            <PersonalInfoForm formSubmit={formSubmitHandler}
                                              inputChange={inputChangeHandler}
                                              fileSelect={fileSelectHandler}
                                              formUpdate={formUpdateHandler}
                                              userData={personalInfo}
                                              toggleButton={toggleAddUpdate}
                                              imagePreview={imagePreview}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;