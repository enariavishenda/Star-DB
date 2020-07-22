import SwapiService from "../../services/swapi-sevice";
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";

const swapi= new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapi

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getDataItem={getPerson}
                     getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    )

}
const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getDataItem={getPlanet}
                     getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Population" />
            <Record field="rotation" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
}
const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getDataItem={getStarship}
                     getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}