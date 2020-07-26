import React from 'react'
import '../../services/swapi-sevice'
import PropTypes from 'prop-types'

import './item-list.css'

const ItemList = (props) => {

    const { data, selectedItem, children: renderLabel } = props

    const elements = data.map((item) => {
        const {id} = item
        const label = renderLabel(item)

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => selectedItem(id)}
            >
                {label}
            </li>
        )
    })

    return (
        <ul className="item-list list-group">
            {elements}
        </ul>
    )
}

ItemList.defaultProps = {
    selectedItem: 11
}

ItemList.propTypes = {
    selectedItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object.isRequired),
    children: PropTypes.func.isRequired
}

export default ItemList