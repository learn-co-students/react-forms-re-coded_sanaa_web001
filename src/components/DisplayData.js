// src/components/DisplayData
import React from "react";

class DisplayData extends React.Component {
  render() {
    console.log(this.props.formData);
    return (
      <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
      </div>
    );
  }
}

export default DisplayData;
