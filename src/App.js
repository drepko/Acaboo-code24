import React, { Component } from 'react';
import './styles/App.css';
import Topbar from './components/layout/Topbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CoursePageContainer from './components/courses/CoursePageContainer'
import AboutPageContainer from './components/about/AboutPageContainer'
import LandingsPageContainer from './components/homepage/LandingsPageContainer'
import Footer from './components/layout/Footer'
import UniversityPageContainer from './components/homepage/UniversityPageContainer'
import SignupPageContainer from './components/signup/SignupPageContainer'
import LoginPageContainer from './components/login/LoginPageContainer'
import CareersPageContainer from './components/careers/CareersPageContainer'
import FAQPageContainer from './components/faq/FAQPageContainer'
import MessageContainer from './components/contact/MessageContainer'
import EmailWhenAvailable from './components/courses/EmailWhenAvailable';
import CheckEmailContainer from './components/checkEmail/CheckEmailContainer';
import ActivationContainer from './components/activation/ActivationContainer'
import ReviewPurchaseContainer from './components/reviewpurchasepage/ReviewPurchaseContainer';
import UserDashboardContainer from './components/UserDashboard/UserDashboardContainer';
import JobDetailPage from './components/careers/JobDetailPage'

class App extends Component {
  render() {
    return (
      <Router>
        {/* the div below is equivalent to the "body" element - note for Jewel */}
        <div className="App"> 
          <div className="App-content">
            <div className="App-header">
              <Topbar/>
            </div>
            <div className="App-main">
              <Route exact path="/courses/:university/:study" component={CoursePageContainer} />
              <Route exact path="/dashboard" component={UserDashboardContainer} />
              <Route exact path="/universities" component={UniversityPageContainer} />
              <Route exact path="/" component={LandingsPageContainer} />
              <Route exact path="/about" component={AboutPageContainer} />
              <Route exact path="/login" component={LoginPageContainer} />
              <Route exact path="/signup" component={SignupPageContainer} />
              <Route exact path="/careers" component={CareersPageContainer} />
              <Route exact path="/faq" component={FAQPageContainer} />
              <Route exact path="/email" component={MessageContainer} />
              <Route exact path="/course/:id/subscribe" component={EmailWhenAvailable} />                            
              <Route exact path="/checkemail" component={CheckEmailContainer} />
              <Route exact path="/verify/:uid/:token" component={ActivationContainer} />
              <Route exact path="/highlights" component={CoursePageContainer} />
              <Route exact path="/reviewpurchase" component={ReviewPurchaseContainer} />
              <Route exact path="/jobdetails" component={JobDetailPage} />

            </div>
            <div className="App-footer">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App