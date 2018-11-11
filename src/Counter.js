import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    render() {
        return (
            <div>
                Counter: {this.state.count}<br/>
                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>
            </div>
        );
    }

    handleDec = () => {
        console.log('---- handleDec()');
        this.setState({
            count: this.state.count - 1
        });
    }

    handleInc = () => {
        console.log('---- handleInc()');
        this.setState({
            count: this.state.count + 1
        });
    }

}

export default Counter;
