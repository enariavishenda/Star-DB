import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from "../random-planet";
import Error from "../error-indicator";

import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";

import {SwapiProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-sevice";
import {
    PersonD,
    PlanetD,
    StarshipD,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components'

import './app.css';
import ErrorBoundry from "../error-boundry";

import DummySwapiService from "../../services/dummy-swapi-service";
import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";


export default class App extends Component {
 
     //dummy-service для тестировки приложения,
    // можно легко подключить теперь.

    state = {
        hasError: false,
        swapi: new DummySwapiService()
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
                        {/*<PagePeople />*/}
                        {/*<Row left={personItem} right={starshipItem} />*/}

                        <PersonDetails itemId={11} />
                        <PlanetDetails itemId={8} />
                        <StarshipDetails itemId={9} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />

                    </div>
                </SwapiProvider>
            </ErrorBoundry>
            
        )
    }
}
