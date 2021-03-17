import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
        <div>
          <form>
            <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.state.firstName} />
            <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.state.lastName} />
            <input type="submit"/>
          </form>
      </div>
        )
    }
}

