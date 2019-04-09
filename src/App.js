import React, { Component } from 'react';
import './App.css';
import Topbar from './components/layout/Topbar'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import CoursePageContainer from './components/CoursePageContainer'
import AboutPageContainer from './components/AboutPageContainer'
import FormContainer from './components/FormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            {/* <Topbar/> */}
          </nav>
          <main>
            <Route exact path="/courses/:university/:study" component={CoursePageContainer} />
            <Route exact path="/about" component={AboutPageContainer} />
            <Route exact path="/formcontainer" component={FormContainer} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App