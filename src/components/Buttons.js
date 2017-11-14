import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import * as action from '../actions/appActions';

class Buttons extends React.Component {
    constructor() {
        super();
        
        this.state = {
            buttons: ['increment', 'decrement']
        }
    }
    
    render() {
        return (
            <div className="app-buttons">
                {
                    this.state.buttons.map((btn, i) => {
                        return (
                            <Button
                                key={i}
                                onClick={this.props[btn]}
                                name={btn}
                            />
                        )
                    })
                }
            </div>
        )
    }   
}

const mapStateToProps = function(state) {
    return {
        someProperty: state.someProperty
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        increment: () => dispatch(action.increment()),
        decrement: () => dispatch(action.decrement())
    }
}

const ButtonsMap = connect(null, mapDispatchToProps)(Buttons)
export default ButtonsMap;
