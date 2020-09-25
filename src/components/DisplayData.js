import React from 'react';

class DisplayData extends React.Component {
    render() {
        const { firstName, lastName } = this.props.formData;
        return (
            <div>
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
            </div>
        )
    }
}

export default DisplayData 
