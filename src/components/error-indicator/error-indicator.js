import React from "react";

import './error-indicator.css'
import icon_1 from './2.gif'

const Error = () => {
    return (
        <div className="error">
            <span>
                <img src={icon_1} alt="error icon_1" className="icon_1"/>
            </span>
                <p>
                    Something has gone wrong
                </p>
                <p>
                    (but we already sent droids to fix it)
                </p>
        </div>

    )
}

export default Error