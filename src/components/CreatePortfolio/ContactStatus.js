import React, {useEffect, useState} from "react";
import "./CreatePortfolio.css";
import axios from "../../axios-portfolio";
import { useParams } from "react-router-dom";
import ContactStatusForm from "../Forms/ContactStatusForm";
import CommonModal from "../Modal/CommonModal";

const ContactStatus = () => {
    const [contactStatus, setContactStatus] = useState({
        statusDescription : ''
    });

    const [renderState, setRenderState] = useState(true);
    const [toggleAddUpdate, setToggleAddUpdate] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [errorLog, setErrorLog] = useState('');

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
                }).catch((error) => {
                    console.log(error.response);
            });
        };

        getData();
    }, [renderState]);

    const inputChangeHandler = (event) => {
        setContactStatus({...contactStatus, [event.target.name]: event.target.value});
    };

    const handleModalToggle = () => setShowModal(!showModal);

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`/contact/${portfolioId}`, contactStatus,
                {withCredentials: true, credentials: 'include'});
            // console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log(error.response.data);
            setErrorLog(error.response.data);
            setShowModal(!showModal);
        }
    };

    const formUpdateHandler = async (id) => {
        try {
            const response = await axios.patch(`/contact/${id}`, contactStatus,
                {withCredentials: true, credentials: 'include'});
            // console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            // console.log(error.response.data);
            setErrorLog(error.response.data);
            setShowModal(!showModal);
        }
    }

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
                            <ContactStatusForm formSubmit={formSubmitHandler}
                                               inputChange={inputChangeHandler}
                                               formUpdate={formUpdateHandler}
                                               userData={contactStatus}
                                               toggleButton={toggleAddUpdate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactStatus;