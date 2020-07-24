import React, {Component} from "react";
import {PersonDetails, PersonList} from "../sw-components";
import Row from "../row";

export default class PeoplePage extends Component {

    state = {
        selectedItem: 1
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        return (
            <Row
                left={<PersonList selectedItem={this.onItemSelected}/>}
                right={<PersonDetails itemId={this.state.selectedItem} />} />
        )
    }
}