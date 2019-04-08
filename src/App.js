import React, { Component } from 'react';
import './App.css';
import Topbar from './components/layout/Topbar'
import { Route } from 'react-router-dom'
import { CoursePageCountainer } from './components/CoursePageContainer'
import { AboutPageCountainer } from './components/AboutPageCountainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Topbar/>
        </nav>
        <main>
          <Route exact path="/courses" component={CoursePageCountainer} />
          <Route exact path="/about" component={AboutPageCountainer} />
        </main>
      </div>
    );
  }
}

export default App;
