import React from "react";
import classes from "./Auth.module.css";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

const Auth = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className={`container`}>
            <div className="row">
                <div className="col-sm-6">
                    <h1>This div will contain some designs about portfolio app.</h1>
                </div>
                <div className={`col-sm-6 ${classes.tabbedContainer}`}>

                    <div className={classes.contentsHolder}>
                        <div className={classes.loginRegContainer}>

                            <Switch>
                                <Route path={`${path}/login`} component={Login} />
                                <Route path={`${path}/register`} component={Registration} />
                            </Switch>

                        </div>
                        <div className={classes.authControls}>

                            <Link to={`${url}/login`}><button>Log in</button></Link>
                            <Link to={`${url}/register`}><button>Sign up</button></Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Auth;