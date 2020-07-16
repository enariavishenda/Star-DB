import React, { Component } from "react";
import SwapiService from "../../services/swapi-sevice.js"
import Loader from "../loader";
import Error from "../error-indicator";

import './random-planet.css'

export default class RandomPlanet extends Component {


    state = {
        planet: {},
        loading: true,
        error: false
    };

    swapi = new SwapiService();

    constructor() {
        super();
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => { //будем передавать эту функцию в другую функцию
        this.setState({ planet, loading: false, error: false }) //вставляем весь уже трансформированный объект целиком из swapi, вместо того, чтобы вытаскивать по каждому свойству.
        //а так же нам нужен уже объект вместе с id для изображения, id реализован в swapi регулярным выражением url'a
        //если у нас есть планета, то Loader не возвращается
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet () {
        const id = 11
        this.swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {

        const { planet, loading, error } = this.state

        const errors = error ? <Error /> : null
        const load = loading ? <Loader /> : null
        const content = !(loading || error) ? <JSX_Planet planet={planet}/> : null


        return (

            <div className="random-planet-place">
                <h5>
                    Random Place
                </h5>
                <div className="random-planet jumbotron rounded">
                    {errors}
                    {load}
                    {content}
                </div>
            </div>
        );
    }
}

const JSX_Planet = ({ planet }) => { //отображение уже готовых данных, разделили обязоности

    const { id, name, population, rotation, diameter } = planet

    return ( // для более двух DOM-элементов, клиент обертка для группировки элементов
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotation}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}