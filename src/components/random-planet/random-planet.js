import React, { Component } from "react";
import SwapiService from "../../services/swapi-sevice.js"

import './random-planet.css'

export default class RandomPlanet extends Component {


    state = {
        planet: {}
    };

    swapi = new SwapiService();

    constructor() {
        super();
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => { //будем передавать эту функцию в другую функцию
        this.setState({ planet }) //вставляем весь уже трансформированный объект целиком из swapi, вместо того, чтобы вытаскивать по каждому свойству.
        //а так же нам нужен уже объект вместе с id для изображения, id реализован в swapi регулярным выражением url'a
    }

    updatePlanet () {
        const id = 12
        this.swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {

        const { planet: {id, name, population, rotation, diameter }} = this.state

        console.log(id)

        return (

            <div className="random-planet-place">
                <h5>
                    Random Place
                </h5>
                <div className="random-planet jumbotron rounded">
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
                </div>
            </div>
        );
    }
}