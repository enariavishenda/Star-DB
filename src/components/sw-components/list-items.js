import React from "react";
import SwapiService from "../../services/swapi-sevice";
import {withData} from "../hoc-helper";
import ItemList from "../item-list";

const swapi = new SwapiService()

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapi

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


const PersonList = withData(
                        withChildrenFunction( ItemList, renderName ),
                        getAllPeople)
const PlanetList = withData(
                        withChildrenFunction( ItemList, renderName ),
                        getAllPlanets)
const StarshipList = withData(
                        withChildrenFunction( ItemList, renderModelAndName ),
                        getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}