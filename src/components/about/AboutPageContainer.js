import React from 'react'
import {connect} from 'react-redux'
import AboutPage from './AboutPage'
import Team from './Team'
import JoinUs from './JoinUs'
import BrowseCourse from '../homepage/BrowseCourse'
import People from '../../images/mock-ups/people.png'
import Advisors from './Advisiors'

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
        <div className="people-about-us">
                <img className="people_image_1" src={People} />
            </div>
        <Advisors/>
    </div>    
    
    )
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(AboutPageContainer)