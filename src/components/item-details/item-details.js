import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: {},
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId
            || this.props.getDataItem !== prevProps.getDataItem
            || this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem() //без обертки if будет бесконечный цикл обновления
            console.log('update person')
        }}

    onError = (error) => {
        console.log('Ошибка: ', error)
    }

    updateItem = () => {
        const {itemId, getDataItem, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        const onItemLoaded = (item) => {
            this.setState({
                item,
                image: getImageUrl(item)//напишем функцию которая получает сам item, и по этому элементу возвращает картинку
            })
        }
        getDataItem(itemId).then(onItemLoaded).catch(this.onError)
    }

    render() {

        const { item, image } = this.state
        const { name} = item
        const childrenRecord = (React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item})}))

        return(
            <div className="person-details card">
                <img className="person-image"
                     src={image}
                />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        { //функция будет вызвана для каждого child,
                            //child может быть любым элементом, строка функция объект.
                            //можно модифицировать child
                            childrenRecord
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Record,
}