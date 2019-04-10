import React, { Component } from 'react';
import './styles/App.css';
import Topbar from './components/layout/Topbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CoursePageContainer from './components/courses/CoursePageContainer'
import AboutPageContainer from './components/about/AboutPageContainer'
import FindCourseContainer from './components/homepage/FindCourseContainer';
//import Subscribe from './components/subscribe/subscribe'
import LandingsPageContainer from './components/homepage/LandingsPageContainer'
import Footer from './components/layout/Footer'
import UniversityPageContainer from './components/homepage/UniversityPageContainer'
import SignupPageContainer from './components/signup/SignupPageContainer'
import LoginPageContainer from './components/login/LoginPageContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Topbar/>
          </nav>
          <main>
            <Route exact path="/courses/:university/:study" component={CoursePageContainer} />
            <Route exact path="/formcontainer" component={FindCourseContainer} />
            <Route exact path="/universities" component={UniversityPageContainer} />
            <Route exact path="/" component={LandingsPageContainer} />
            <Route exact path="/about" component={AboutPageContainer} />
            <Route exact path="/logins" component={LoginPageContainer} />
            <Route exact path="/signup" component={SignupPageContainer} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App