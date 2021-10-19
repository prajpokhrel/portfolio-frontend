import React, {useEffect, useState} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import Profile from "./containers/Profile/Profile";
import Portfolio from "./containers/Portfolio/Portfolio";
import PortfolioBuilder from "./containers/PortfolioBuilder/PortfolioBuilder";
import axios from "./axios-portfolio";

function App() {

    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInUser = async () => {
            try {
                const response = await axios.get('/users/me',
                    {withCredentials: true, credentials: 'include'});
                setIsLoggedIn(prevState => !isLoggedIn);
                setCurrentUser(prevState => response.data);
                console.log("Logged in user", response.data);
            }  catch (error) {
                console.log(error.response);
            }
        };

        // can handle promise if needed
        loggedInUser();

    }, []);

    return (
        <>
        {Object.keys(currentUser).length === 0 ?
            <Switch>
                <Redirect exact from="/" to="/auth" />
                <Route path="/auth" component={Auth} />

                <Route path="/profile">
                    <Redirect to="/auth"/>
                </Route>
                <Route path="/portfolio">
                    <Redirect to="/auth" />
                </Route>
                <Route path="/create">
                    <Redirect to="/auth" />
                </Route>
            </Switch>
            :
            <Switch>
                <Redirect exact from="/" to="/auth" />
                <Route path="/auth">
                    {isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="/auth" />}
                </Route>
                <Route path="/profile">
                    {isLoggedIn ? <Profile /> : <Redirect to="/auth"/>}
                </Route>
                <Route path="/portfolio">
                    {isLoggedIn ? <Portfolio /> : <Redirect to="/auth" />}
                </Route>
                <Route path="/create">
                    {isLoggedIn ? <PortfolioBuilder /> : <Redirect to="/auth" />}
                </Route>

                {/*<Route exact path="/profile" component={Profile} />*/}
                {/*<Route exact path="/portfolio" component={Portfolio} />*/}
                {/*<Route exact path="/create" component={PortfolioBuilder} />*/}
            </Switch>
        }
        </>
    );
}

export default App;