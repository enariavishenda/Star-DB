import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapi } from "../hoc-helper";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapi) => {
    return {
        getDataItem: swapi.getPerson,
        getImageUrl: swapi.getPersonImage
    }
}

export default withSwapi(mapMethodsToProps)(PersonDetails);