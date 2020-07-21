import React, { Component } from 'react';
import '../../services/swapi-sevice'

import './item-list.css';
import Loader from "../loader";

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props
        getData().then((itemList) => {
                this.setState({
                    itemList
                })
        })
    }
    renderElements(arr) {
        return arr.map((item) => {
            const {id} = item
            const label = this.props.children(item)
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.selectedPerson(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const { itemList } = this.state
        if (!itemList) {
            return <Loader />
        }
        const elements = this.renderElements(itemList)

        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        )
    }
}