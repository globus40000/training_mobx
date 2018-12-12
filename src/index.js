import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Counter extends React.Component {

  @observable count = 0;

  render() {
    return (
      <div>
        Counter: {this.count} <br/>
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }

  handleInc = () => {
    this.count += 1;
  };

  handleDec = () => {
    this.count -= 1;
  };

}

ReactDOM.render(<Counter/>, document.getElementById('root'));
