import React from "react";
import {withData, withSwapi} from "../hoc-helper";
import ItemList from "../item-list";
import withChildrenFunction from "../hoc-helper/with-child-function";
import compose from "../hoc-helper/compose";

const renderName = ({name}) => <span>{name}</span> //всегда установлена рендер функция
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const mapPersonProps = (swapi) => {
    return {
        getData: swapi.getAllPeople
    }
}
const mapPlanetProps = (swapi) => {
    return {
        getData: swapi.getAllPlanets
    }
}
const mapStarshipProps = (swapi) => {
    return {
        getData: swapi.getAllStarships
    }
}

const PersonList = compose(
    withSwapi(mapPersonProps),
    withData,
    withChildrenFunction(renderName))
(ItemList)

const PlanetList = compose(
    withSwapi(mapPlanetProps),
    withData,
    withChildrenFunction(renderName))
(ItemList)
const StarshipList = compose(
    withSwapi(mapStarshipProps),
    withData,
    withChildrenFunction(renderModelAndName))
(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}