import React, { Component } from "react";

import './random-planet.css'

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className="random-planet-place">
                <h5>
                    Random Place
                </h5>
                <div className="random-planet jumbotron rounded">
                    <img className="planet-image"
                         src="https://cdn.sm-news.ru/wp-content/uploads/2020/01/20/flat-earth-soccor.jpg" />
                    <div>
                        <h4>Big Samsa</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Population</span>
                                <span>6666666</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Rotation Period</span>
                                <span>1</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Diameter</span>
                                <span>160</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}