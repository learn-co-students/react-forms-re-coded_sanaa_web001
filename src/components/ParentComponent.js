import React from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
      state={this.state}
      handleChange ={this.handleChange}
      handleSubmit ={this.handleSubmit}
      />
      <DisplayData state={this.state}/>
      </div>
    )
  }
}

export default ParentComponent;