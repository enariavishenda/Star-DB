import React, {Component} from 'react'

import './people-page.css'
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-sevice";
import Row from "../row";
import {Record} from "../item-details/item-details";



export default class PagePeople extends Component {

    swapi = new SwapiService()

    state = {
        selectedItem: 1,
    }

    selectedItemList = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {

        const {
            getAllPeople,
            getPerson,
            getPersonImage,} = this.swapi

        const listItem = (
            <ItemList
                selectedItem={this.selectedItemList}
                getData={getAllPeople}>
                {(item) => ( `${item.name} (${item.birthYear})` )}
            </ItemList>
            )

        const details = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getDataItem={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
                )

            return (
                <ErrorBoundry>
                    <Row left={listItem} right={details} />
                </ErrorBoundry>

            );
        }
    }



