import React, {Component} from "react";
import {StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row";

export default class StarshipPage extends Component {

    state = {
        selectedItem: 12
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        return (
            <Row
                left={<StarshipList selectedItem={this.onItemSelected}/>}
                right={<StarshipDetails itemId={this.state.selectedItem} />} />
        )
    }
}