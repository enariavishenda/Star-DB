import React from "react";
import {SwapiConsumer} from "../swapi-service-context";

const withSwapi = (mapMethodsToProps) => (Details) => {

    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapi) => {
                        const serviceProps = mapMethodsToProps(swapi)

                        return (
                            <Details {...props} {...serviceProps}/>
                        )
                    }
                }
            </SwapiConsumer>
        )
    }
}
export default withSwapi