import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from "../random-planet";
import Error from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import {SwapiProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-sevice";
import DummySwapiService from "../../services/dummy-swapi-service";
import {PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage} from "../pages";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import './app.css';
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {

    state = {
        hasError: false,
        swapi: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    onServiceChange = () => {
        this.setState(
            ({swapi})  => {
                const Service = swapi instanceof SwapiService ?
                    DummySwapiService : SwapiService
                return {
                    swapi: new Service
                }
            }
        )
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }

        const { isLoggedIn } = this.state

        return (
            <ErrorBoundry>
                <SwapiProvider value={this.state.swapi}>
                    <Router>
                        <div>
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            <Switch>
                                <Route path="/"
                                       render={() => <h2>Welcome to Star Wars Test's DataBase</h2>}
                                       exact
                                />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetPage} />
                                <Route path="/starships" exact component={StarshipPage} />
                                <Route path="/starships/:id"
                                       render={
                                           ({match}) => {
                                               const {id} = match.params
                                               return <StarshipDetails itemId={id} />
                                           }} />
                                <Route path="/login"
                                       render={() => (
                                           <LoginPage
                                               isLoggedIn={isLoggedIn}
                                               onLogin={this.onLogin}/>
                                       )}/>
                                <Route path="/secret"
                                       render={() => (
                                           <SecretPage isLoggedIn={isLoggedIn}/>)} />
                                <Route render={() => {
                                    return (
                                    <React.Fragment>
                                    <h3 className="jumbotron text-center">Page not found</h3>
                                    <Error/>
                                    </React.Fragment>)
                                }} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiProvider>
            </ErrorBoundry>
            
        )
    }
}
