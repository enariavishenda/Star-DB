import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: {},
        error: false,
        loading: true,
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
            this.setState({
                error: false,
                loading: true
            })
        }}

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })}

    updateItem = () => {
        const {itemId, getDataItem, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        const onItemLoaded = (item) => {
            this.setState({
                item,
                error: false,
                loading: false,
                image: getImageUrl(item)//напишем функцию которая получает сам item, и по этому элементу возвращает картинку
            })
        }
        getDataItem(itemId).then(onItemLoaded).catch(this.onError)
    }

    render() {

        const { item, error, loading, image } = this.state
        //
        // const errors = error ? <Error /> : null
        // const load = loading ? <Loader /> : null
        // const content = !(loading || error) ?
        //     <JSX_Person item={item} image={image}/> : null

        const { name, gender, birthYear, eyeColor} = item

        return(
            <div className="person-details card">
                {/*{errors}*/}
                {/*{load}*/}
                {/*{content}*/}
                <img className="person-image"
                     src={image}
                />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        { //функция будет вызвана для каждого child,
                            //child может быть любым элементом, строка функция объект.
                            //можно модифицировать child
                            React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {item})
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const JSX_Person = ({item, image}) => {
    const { name, gender, birthYear, eyeColor} = item
    return (
        <React.Fragment>
            <img className="person-image"
                 src={image}
            />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    { //функция будет вызвана для каждого child,
                        //child может быть любым элементом, строка функция объект.
                        React.Children.map(this.props.children, (child) => {
                            return child
                            }
                        )
                    }
                </ul>
            </div>
        </React.Fragment>
    )
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