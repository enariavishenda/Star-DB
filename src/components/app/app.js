import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from "../random-planet";
import Error from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import {SwapiProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-sevice";
import DummySwapiService from "../../services/dummy-swapi-service";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";


import './app.css';

export default class App extends Component {

    state = {
        hasError: false,
        swapi: new SwapiService()
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

        return (
            <ErrorBoundry>
                <SwapiProvider value={this.state.swapi}>
                    <div>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />

                    </div>
                </SwapiProvider>
            </ErrorBoundry>
            
        )
    }
}
