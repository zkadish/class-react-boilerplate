import React from 'react';
import Value from './Value';
import Buttons from './Buttons';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        //     value: this.props.value
        // }
    }
    
    // increment = () => {
    //     console.log('increment');
    //     this.setState({ value: this.state.value + 1 });
    // }
    
    // decrement = () => {
    //     console.log('decrement');
    //     this.setState({ value: this.state.value - 1 });
    // }
     
    
    render() {
        return (
            <div className="app-container">
                <div className="app-header">{this.props.title}</div>
                {/*<Value value={this.state.value}/>*/}
                <Value />
                {/*<Buttons
                    increment={this.increment}
                    decrement={this.decrement}
                />*/}
                <Buttons />
            </div>
        )
    }
}

export default App;
