import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from "../random-planet";
import './app.css';
import Error from "../error-indicator";
import PagePeople from "../people-page";

export default class App extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PagePeople />
            </div>
        )
    }
}
