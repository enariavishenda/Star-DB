import React, {Component} from "react";
import Error from "../error-indicator";
import './error-boundry.css'

export default class ErrorBoundry extends Component {

    state ={
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }
        return this.props.children
    }
}