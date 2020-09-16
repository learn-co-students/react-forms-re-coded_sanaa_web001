import React, { Component } from 'react'
import Form from './Form'
import DiplayData from './DisplayData'

export default class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
             firstName: 'ahmed',
             lastName: 'faisl'
            }
    }
    handleChange = event => this.setState({[event.target.name] : event.target.value})

    // handleFirstNameChange = event => this.setState({firstName : event.target.value})
    // handleLastNameChange = event => this.setState({lastName : event.target})

    render() {
        return (
            <div>
                <Form
                    formData = { this.state }
                    handleChange = { this.handleChange }
                />
                <DiplayData formData = { this.setState }/>
            </div>
        )
    }
}
