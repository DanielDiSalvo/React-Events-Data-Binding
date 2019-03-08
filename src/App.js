import React, { Component } from 'react';
import './App.css';

class App extends Component {
      // constructor() {
      //   super()

      // This binding is necessary to make `this` work in the callback if not using Arrow Function
      // this.changeName=this.changeName.bind(this);

     // }

  state = {
    name: 'Daniel'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  // changeName() {
  //   this.setState({
  //     name: 'Hello There!'
  //   })
  // }


  changeNameFromInput= (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Events - React</h1>
          {/* <button onClick={() => this.changeName('Not So Awesome Juan')}>Change Name Using Arrow Function</button> */}
          <button onClick={this.changeName.bind(this, 'Awesome Daniel')}>Change Name Using Bind Function</button>
        <h2>Two Way Data Binding</h2>
          <input type='text' onChange={this.changeNameFromInput} value={this.state.name}/>
        <div>
          {this.state.name}
        </div>
      </div>
    );
  }
}

export default App;
