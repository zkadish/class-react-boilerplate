import React from 'react';
import { connect } from 'react-redux';

class Value extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="app-value">
                {this.props.value}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        value: state.value
    })
)(Value);
