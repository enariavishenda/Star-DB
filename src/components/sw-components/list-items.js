import React from "react";
import {withData, withSwapi} from "../hoc-helper";
import ItemList from "../item-list";

const withChildrenFunction = (Lists, fn) => {
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

const PersonList = withSwapi(withData(withChildrenFunction( ItemList, renderName )),
                        mapPersonProps)
const PlanetList = withSwapi(withData(withChildrenFunction( ItemList, renderName )),
                        mapPlanetProps)
const StarshipList = withSwapi(withData(withChildrenFunction( ItemList, renderModelAndName )),
                        mapStarshipProps)

export {
    PersonList,
    PlanetList,
    StarshipList
}