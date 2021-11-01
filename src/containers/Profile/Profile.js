import * as React from "react";
import classes from "./Profile.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import FooterSection from "../../components/PortfolioSections/FooterSection";
import {useEffect, useState} from "react";
import {useHistory, Redirect} from "react-router-dom";
import axios from "../../axios-portfolio";
import Loader from "../../components/Loader/Loader";
import CommonModal from "../../components/Modal/CommonModal";
import TextField from "@mui/material/TextField";

const Profile = (props) => {

    const [currentUser, setCurrentUser] = useState({});
    const [formData, setFormData] = useState({
        portfolioName: "",
        portfolioDescription: ""
    });

    const [formError, setFormError] = useState({
        portfolioName: "",
        portfolioDescription: ""
    });

    const [portfolios, setPortfolios] = useState([]);
    const [renderState, setRenderState] = useState(true);
    const [auth, setAuth] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const initialState = {
        portfolioName: "", portfolioDescription: ""
    }

    useEffect(() => {
        const loggedInUser = () => {
            axios.get('/users/me', {withCredentials: true})
                .then((response) => {
                    console.log("Logged in user", response.data);
                    setCurrentUser(prevState => response.data)
                    setAuth(prevState => true);
                }).catch((error) => {
                setAuth(prevState => false);
                console.log("Error: ", error.response);
            });
        };

        // can handle promise if needed
        loggedInUser();

    }, []);

    useEffect(() => {
        const getPortfolios = () => {
            axios.get('/portfolio', {withCredentials: true})
                .then((response) => {
                    console.log(response.data);
                    setPortfolios(response.data);
                }).catch((error) => {
                    console.log("ERROR", error.response);
            });
        };
        getPortfolios();
    }, [renderState]);

    const handleModalToggle = () => {
        setShowModal(!showModal);
        setFormData({portfolioName: "", portfolioDescription: ""});
        setFormError({portfolioName: "", portfolioDescription: ""});
    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const deletePortfolioHandler = async (portfolioId) => {
        try {
            const response = await axios.delete(`/portfolio/${portfolioId}`,
                {withCredentials: true});
            console.log(response.data);
            setRenderState(!renderState);
        } catch (error) {
            console.log("ERROR", error.response);
        }
    };

    const createPortfolioHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/portfolio', formData,
                {withCredentials: true});
            console.log(response.data);
            setRenderState(!renderState)
            setShowModal(!showModal);

        } catch (error) {
            console.log(error.response.data);
            setFormError({...initialState, [error.response.data.context.key]: error.response.data.message });
        }

        console.log(formData);

    };

    const updatePortfolioHandler = (portfolioId) => {
        history.push(`/create/${portfolioId}`);
    };

    const viewPortfolioHandler = (portfolioId) => {
        history.push(`/portfolio/${portfolioId}`);
    };

    return (
        <div>
            {
                auth === true ?
                    (
                        <>
                        <div className="container-fluid">
                            <div className="row">
                                <CommonModal
                                    errorTitle={false}
                                    modalName="Create Portfolio"
                                    createPortfolioModal={handleModalToggle}
                                    show={showModal}>

                                    <form onSubmit={createPortfolioHandler}>
                                        <p className="text-danger">*You cannot change these information later.</p>
                                        <div className="mb-3 mt-3">
                                            <TextField fullWidth
                                                       required
                                                       error={formError.portfolioName !== ''}
                                                       helperText={formError.portfolioName}
                                                       name="portfolioName"
                                                       value={formData.portfolioName}
                                                       onChange={inputChangedHandler}
                                                       label="Portfolio Name"
                                                       placeholder = "Enter your portfolio name..."
                                                       variant="standard" />
                                        </div>
                                        <div className="mb-3 mt-3">
                                            <TextField fullWidth
                                                       required
                                                       error={formError.portfolioDescription !== ''}
                                                       helperText={formError.portfolioDescription}
                                                       multiline
                                                       minRows={3}
                                                       maxRows={5}
                                                       value={formData.portfolioDescription}
                                                       name="portfolioDescription"
                                                       onChange={inputChangedHandler}
                                                       label="Description"
                                                       placeholder = "Write about your portfolio..."
                                                       variant="standard" />
                                        </div>

                                        <Button fullWidth type="submit" variant="outlined">Submit</Button>
                                    </form>

                                </CommonModal>
                            </div>
                        </div>
                        <Navigation headingTitle="My personal workspace"
                                    createPortfolioModal={handleModalToggle}
                                    createPortfolioButton={true}
                                    loggedUserName={currentUser.userName} />

                        <section className={`${classes.profileSection} bg-dark text-light`}>
                            <div className="container">
                                <div className="row">
                                    <div className={`col-sm-12 ${classes.myPortfoliosWrapper}`}>
                                        <h1 className="display-3 text-center">My Portfolios</h1>
                                        <div className="row">
                                            <div className={`col-sm-12 ${classes.portfoliosContainer}`}>
                                                {
                                                    portfolios.length === 0
                                                        ? <h4 className="text-warning text-center">You do not have any portfolios, please create one!</h4>
                                                        : portfolios.map((data) => {
                                                            return (
                                                                <div className={`row mb-4 ${classes.singlePortfolio}`} key={data._id}>
                                                                    <div className="col-sm-8 pt-3 pb-3 text-light">
                                                                        <h1>{data.portfolioName}</h1>
                                                                        <p>{data.portfolioDescription}</p>
                                                                    </div>
                                                                    <div className={`col-sm-4 pt-3 pb-3 text-light ${classes.controlButtons}`}>
                                                                        <ButtonGroup variant="contained">
                                                                            <Button color="success" onClick={() => viewPortfolioHandler(data._id)}>View</Button>
                                                                            <Button color="info" onClick={() => updatePortfolioHandler(data._id)}>Update</Button>
                                                                            <Button color="error" onClick={() => deletePortfolioHandler(data._id)}>Delete</Button>
                                                                        </ButtonGroup>
                                                                        {/*<Button variant="contained" color="success">View</Button>*/}
                                                                        {/*<Button variant="contained" color="info">Update</Button>*/}
                                                                        {/*<Button variant="contained" color="error">Delete</Button>*/}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className={`col-sm-12 ${classes.portfolioUpdateSection}`}>*/}
                                {/*        <h1>Update Portfolio Sections</h1>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </section>

                        <FooterSection />
                        </>
                    )
                    : auth === false ?
                    (
                        <Redirect to="/auth/login" />
                    )
                    : auth === null ? <Loader message="Gathering information... Please wait for a while..." redirectButton={false}/> : null
            }
        </div>
    );
};

export default Profile;