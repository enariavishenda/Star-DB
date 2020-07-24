import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapi } from "../hoc-helper";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotation" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getDataItem: swapi.getPlanet,
        getImageUrl: swapi.getPlanetImage
    }
}

export default withSwapi(mapMethodsToProps)(PlanetDetails);