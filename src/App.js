import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import Profile from "./containers/Profile/Profile";
import Portfolio from "./containers/Portfolio/Portfolio";
import PortfolioBuilder from "./containers/PortfolioBuilder/PortfolioBuilder";
import Error404 from "./components/Error404/Error404";

function App() {
    return (
        <>
            <Switch>
                <Redirect exact from="/" to="/auth/login" />
                <Route path="/auth" component={Auth} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/portfolio/:portfolioId" component={Portfolio} />
                <Route exact path="/create/:portfolioId" component={PortfolioBuilder} />
                <Route path="*" component={Error404} />
            </Switch>
        </>
    );
}

export default App;