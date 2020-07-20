import React, {Component} from 'react'

import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Error from "../error-indicator";

export default class PagePeople extends Component {

    state = {
        selectedPerson: 1,
        hasError: false
    }

    selectedPersonItem = (id) => {
        this.setState({
            selectedPerson: id
        })
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

            return (
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList selectedPerson={this.selectedPersonItem}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            );
        }
    }


