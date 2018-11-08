import React, { Component } from 'react';

class Counter extends Component {

    count = 0;

    render() {
        return (
            <div>
                Counter: {this.count}<br/>
                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>
            </div>
        );
    }

    handleDec = () => {
        console.log('---- handleDec()');
        this.count--;
    }

    handleInc = () => {
        console.log('---- handleInc()');
        this.count++;
    }

}

export default Counter;
