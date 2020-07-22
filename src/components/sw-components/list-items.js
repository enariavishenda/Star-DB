import SwapiService from "../../services/swapi-sevice";
import withData from "../hoc-helper";
import ItemList from "../item-list";

const swapi = new SwapiService()

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapi

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}