import React from "react";
import {withData, withSwapi} from "../hoc-helper";
import ItemList from "../item-list";

const withChildrenFunction = (fn) => (Lists) => {
    return (props) => {
        return (
            <Lists {...props}>
                {fn}
            </Lists>
        )
    }
}

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

const PersonList = withSwapi(mapPersonProps)(
                        withData(
                            withChildrenFunction(renderName)(
                                ItemList)))
const PlanetList = withSwapi(mapPlanetProps)(
                        withData(
                            withChildrenFunction(renderName)(
                                ItemList)))
const StarshipList = withSwapi(mapStarshipProps)(
                        withData(
                            withChildrenFunction(renderModelAndName)(
                                ItemList)))

export {
    PersonList,
    PlanetList,
    StarshipList
}