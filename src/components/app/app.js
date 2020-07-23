import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from "../random-planet";
import Error from "../error-indicator";

import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";

import {SwapiProvider} from "../swapi-service-context";

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


export default class App extends Component {
 
    swapi = new DummySwapiService() //dummy-service для тестировки приложения,
    // можно легко подключить теперь.

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapi

        const personItem = (
            <ItemDetails itemId={11}
                         getDataItem={getPerson}
                         getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        )

        const starshipItem = (
            <ItemDetails itemId={5}
                         getDataItem={getStarship}
                         getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        )

        return (
            <ErrorBoundry>
                <SwapiProvider value={this.swapi}>
                    <div>
                        <Header/>
                        <RandomPlanet/>
                        {/*<PagePeople />*/}
                        {/*<Row left={personItem} right={starshipItem} />*/}

                        <PersonD itemId={11} />
                        <PlanetD itemId={8} />
                        <StarshipD itemId={9} />

                        <PersonList />
                        <PlanetList />
                        <StarshipList />

                    </div>
                </SwapiProvider>
            </ErrorBoundry>
            
        )
    }
}
