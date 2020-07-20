import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-sevice";
import Loader from "../loader";
import Error from "../error-indicator";

export default class PersonDetails extends Component {

    swapi = new SwapiService()

    state = {
        person: null,
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson() //без обертки if будет бесконечный цикл обновления
            console.log('update person')
            this.setState({
                error: false,
                loading: true
            })
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            error: false,
            loading: false
        })
    }

    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapi
            .getPerson(personId)
            .then(this.onPersonLoaded)
            .catch(this.onError)
    }


    render() {

        const { person, error, loading } = this.state

        const errors = error ? <Error /> : null
        const load = loading ? <Loader /> : null
        const content = !(loading || error) ? <JSX_Person person={person}/> : null

        return(
            <div className="person-details card">
                {errors}
                {load}
                {content}
            </div>
        )
    }
}

const JSX_Person = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person
    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Born Date</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}