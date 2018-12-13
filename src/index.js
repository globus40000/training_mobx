import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

let appState = observable({
  count: 0
});
appState.increment = function() {
  this.count += 1;
};
appState.decrement = function() {
  this.count -= 1;
};

@observer
class Counter extends React.Component {

  render() {
    return (
      <div>
        Counter: {this.props.store.count} <br/>
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }

  handleInc = () => {
    this.props.store.increment();
  };

  handleDec = () => {
    this.props.store.decrement();
  };

}

ReactDOM.render(<Counter store={appState} />, document.getElementById('root'));
