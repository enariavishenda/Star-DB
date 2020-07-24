import React from "react";

const withChildrenFunction = (fn) => (Lists) => {
    return (props) => {
        return (
            <Lists {...props}>
                {fn}
            </Lists>
        )
    }
}
export default withChildrenFunction