import React, { Component } from 'react';
import './App.css';
//import Topbar from './components/layout/Topbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CoursePageContainer from './components/CoursePageContainer'
import AboutPageContainer from './components/AboutPageContainer'

//import Subscribe from './components/subscribe/subscribe'
import LandingsPageContainer from './components/LandingsPageContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            {/* <Topbar/> */}
          </nav>
          <main>
            <Route exact path="/" component={LandingsPageContainer} />
            <Route exact path="/courses" component={CoursePageContainer} />
            <Route exact path="/about" component={AboutPageContainer} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App