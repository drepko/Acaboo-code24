import React from 'react'
import {connect} from 'react-redux'
import AboutPage from './AboutPage'
import Team from './Team'
import JoinUs from './JoinUs'
import BrowseCourse from '../homepage/BrowseCourse'
import people from '../../images/mock-ups/people.png'
import Advisors from './Advisiors'
import NewsSubscription from '../subscribe/subscriptionForm'

class AboutPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return (
      <div className = "about-main-page">
        <AboutPage />
        <Team/>
        <JoinUs/>
        <BrowseCourse/>
        <div className="section_9 section_image_people">
          <img alt="people" className="image-lg-overflow" src={people} />
        </div>
        <Advisors/>
        <h1>Want more? Subscribe to our newsletter</h1>
        <NewsSubscription/>
        <p>Add some helper text here to explain the finer details of your product or service. </p>
    </div>    
    
    )
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(AboutPageContainer)