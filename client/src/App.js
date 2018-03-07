import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      displayName: 'products'
    }
  }

  handDisplayName = (displayName) => {
    this.setState({displayName});
  }

  render() {
    return (
      <div className="App">
        <Navbar onNavClick={this.handDisplayName}/>
        {this.state.displayName === 'products' && <Products />}
        {this.state.displayName === 'cart' && <Cart />}
      </div>
    );
  }
}

export default App;
