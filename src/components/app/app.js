import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from "../random-planet";
import Error from "../error-indicator";
import PagePeople from "../people-page";
import Row from "../row";
import SwapiService from "../../services/swapi-sevice";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components'

import './app.css';


export default class App extends Component {

    swapi = new SwapiService()

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
            <div>
                <Header/>
                <RandomPlanet/>
                {/*<PagePeople />*/}
                {/*<Row left={personItem} right={starshipItem} />*/}

                <PersonDetails itemId={11} />
                <PlanetDetails itemId={8} />
                <StarshipDetails itemId={9} />

                <PersonList>
                    { ({name}) => <span>{name}</span>}
                </PersonList>
                <PlanetList>
                    { ({name}) => <span>{name}</span>}
                </PlanetList>
                <StarshipList>
                    { ({name}) => <span>{name}</span>}
                </StarshipList>

            </div>
        )
    }
}
