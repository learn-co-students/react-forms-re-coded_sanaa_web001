import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
     const { firstName, lastName } = this.props.formData;
    return (
        <div>
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>

      <form>
        <input
          type="text"
          name="firstName"
          onChange={this.props.handleChange}
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={this.props.handleChange}
          value={lastName} />
      </form>
    </div>
    )
  }
}

export default Form;
