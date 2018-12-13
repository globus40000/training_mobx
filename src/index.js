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
        Counter: {appState.count} <br/>
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }

  handleInc = () => {
    appState.increment();
  };

  handleDec = () => {
    appState.decrement();
  };

}

ReactDOM.render(<Counter />, document.getElementById('root'));
