import React, {useState} from "react";
import classes from "./Auth.module.css";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Button from "@mui/material/Button";
import Landing from "./Landing";

const Auth = () => {

    const [toggle, setToggle] = useState(true);

    let { path, url } = useRouteMatch();

    const handleToggleClicked = (event) => {
        if (event.target.name === 'signin') {
            setToggle(true);
        } else if (event.target.name === 'signup') {
            setToggle(false);
        }
    }

    return (
        <div className={`container`}>
            <div className="row">
                <div className={`col-sm-6 ${classes.landingContainer}`}>
                    <h1 className="display-1">Hola.</h1>
                </div>
                <div className={`col-sm-6 ${classes.tabbedContainer}`}>
                    <div>
                        <div className="row">
                            <div className={`col-sm-12 ${classes.landingHeading}`}>
                                <h1 className="text-center">IMPRESSIVE PORTFOLIOS</h1>
                                <p className="text-center">Professional out-of-the-box portfolios, instantly generated
                                    by the most advanced portfolio builder technology available.</p>
                                {/*<h4 className="text-center">Choose the best option below to get started</h4>*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className={classes.loginRegContainer}>

                                <Switch>
                                    <Route path={`${path}/login`} component={Login} />
                                    <Route path={`${path}/register`} component={Registration} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-sm-6 m-auto ${classes.authControls}`}>
                            {
                                toggle
                                    ?
                                    <>
                                        <h5>Don't have an account? </h5>
                                        <Link to={`${url}/register`} >
                                            <Button name="signup" onClick={handleToggleClicked} variant="outlined">Sign up</Button>
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <h5>Already have an account?</h5>
                                        <Link to={`${url}/login`}>
                                            <Button name="signin" onClick={handleToggleClicked} variant="outlined">Log in</Button>
                                        </Link>
                                    </>
                            }

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Auth;