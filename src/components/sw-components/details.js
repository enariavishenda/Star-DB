import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapi } from "../hoc-helper";

const PersonDetails = ({itemId, swapi}) => {
    const {getPerson,getPersonImage} = swapi
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
const PlanetDetails = ({itemId, swapi}) => {
    const { getPlanet, getPlanetImage } =swapi
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
const StarshipDetails = ({itemId, swapi}) => {
    const { getStarship, getStarshipImage } = swapi
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

const PersonD = withSwapi(PersonDetails);
const PlanetD = withSwapi(PlanetDetails);
const StarshipD = withSwapi(StarshipDetails)

export {
    PersonD,
    PlanetD,
    StarshipD
}