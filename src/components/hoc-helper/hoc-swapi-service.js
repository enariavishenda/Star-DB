import React from "react";
import {SwapiConsumer} from "../swapi-service-context";

const withSwapi = (Details) => {

    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapi) => {
                        return (
                            <Details {...props} swapi={swapi}/>
                        )
                    }
                }
            </SwapiConsumer>
        )
    }
}
export default withSwapi