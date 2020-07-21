import React, {Component} from 'react'

import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Error from "../error-indicator";
import SwapiService from "../../services/swapi-sevice";
import Row from "../row";

class ErrorBoundry extends Component {

    state ={
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }
        return this.props.children
    }
}

export default class PagePeople extends Component {

    swapi = new SwapiService()

    state = {
        selectedPerson: 1,
        hasError: false
    }

    selectedPersonItem = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const listItem = (
            <ItemList
                selectedPerson={this.selectedPersonItem}
                getData={this.swapi.getAllPeople}>
                {(item) => ( `${item.name} (${item.birthYear})` )}
            </ItemList>
            )

        const details = (
            <PersonDetails
                personId={this.state.selectedPerson}/>)

            return (
                <ErrorBoundry>
                    <Row left={listItem} right={details} />
                </ErrorBoundry>

            );
        }
    }



