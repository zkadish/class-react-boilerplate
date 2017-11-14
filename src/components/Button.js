import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}

export default Button;
