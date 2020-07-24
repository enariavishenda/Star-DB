import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapi } from "../hoc-helper";


const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getDataItem: swapi.getStarship,
        getImageUrl: swapi.getStarshipImage
    }
}

export default withSwapi(mapMethodsToProps)(StarshipDetails)