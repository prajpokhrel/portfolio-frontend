import React, {useEffect, useState} from 'react';
import './App.css';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import Profile from "./containers/Profile/Profile";
import Portfolio from "./containers/Portfolio/Portfolio";
import PortfolioBuilder from "./containers/PortfolioBuilder/PortfolioBuilder";
import axios from "./axios-portfolio";

const Test = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getAll = () => {
            axios.get("/portfolio/test", {withCredentials: true, credentials: "include"})
                .then((response) => {
                    setAllData(response.data);
                    console.log(allData);
                }).catch((error) => {
                    console.log(error.response);
            });
        }

        getAll();
    }, []);

    return (
        <h2>Hello World</h2>
    );
}

function App() {
    return (
        <>
            <Switch>
                <Redirect exact from="/" to="/auth/login" />
                <Route path="/auth" component={Auth} />
                <Route path="/profile" component={Profile} />
                <Route path="/portfolio/:portfolioId" component={Portfolio} />
                <Route path="/create/:portfolioId" component={PortfolioBuilder} />
                <Route path="/test" component={Test}/>
            </Switch>
        </>
    );
}

export default App;