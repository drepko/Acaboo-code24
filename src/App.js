import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/layout/Topbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Topbar/>
        </nav>
      </div>
    );
  }
}

export default App;
