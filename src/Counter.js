import React, { Component } from 'react';
import { observer } from 'mobx-react';

// "This component's rendering can be derived from the relevant observables. Do so whenever needed."
@observer class Counter extends Component {

    render() {
        return (
            <div>
                Counter: {this.props.store.count}<br/>
                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>
            </div>
        );
    }

    handleDec = () => {
        console.log('---- handleDec()');
        this.props.store.decrement();
    };

    handleInc = () => {
        console.log('---- handleInc()');
        this.props.store.increment();
    };

}

export default Counter;
