import React, { Component } from 'react';
import '../../services/swapi-sevice'

import './item-list.css';
import SwapiService from "../../services/swapi-sevice";
import Loader from "../loader";
export default class ItemList extends Component {

    swapi = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapi
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
        })
    }
    renderElements(arr) {
        return arr.map(({id,name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.selectedPerson(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const { peopleList} = this.state
        if (!peopleList) {
            return <Loader />
        }
        const elements = this.renderElements(peopleList)

        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        )
    }
}