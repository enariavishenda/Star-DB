import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {
    render() {
        return(
            <div className="person-details card">
                <img className="person-image"
                     src="https://memepedia.ru/wp-content/uploads/2016/07/lyagushka-ulybaetsya.jpg"
                     />
                     <div className="card-body">
                         <h4>Pepe Quak!</h4>
                         <ul className="list-group list-group-flush">
                             <li className="list-group-item">
                                 <span className="term">Sex</span>
                                 <span>Frog male</span>
                             </li>
                             <li className="list-group-item">
                                 <span className="term">born date</span>
                                 <span>30</span>
                             </li>
                             <li className="list-group-item">
                                 <span className="term">Eye Color</span>
                                 <span>Evil</span>
                             </li>
                         </ul>
                     </div>
            </div>
        )
    }
}