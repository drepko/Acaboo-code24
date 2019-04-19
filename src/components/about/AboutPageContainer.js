import React from 'react'
import {connect} from 'react-redux'
import AboutPage from './AboutPage'
import Team from './Team'
import JoinUs from './JoinUs'
import BrowseCourse from '../homepage/BrowseCourse'
import people from '../../images/mock-ups/people.png'
import man_desk_degree from '../../images/mock-ups/man_desk_degree.png'
import Advisors from './Advisiors'
import NewsSubscription from '../subscribe/subscriptionForm'

class AboutPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return (
      <div className = "about-main-page padding-top-small ">
        <AboutPage />
        <Team/>
        <JoinUs/>
        <BrowseCourse/>
        <div className="section_9 section_image_people">
          <img alt="people" className="image-med-overflow margin-side" src={people} />
        </div>
        <Advisors/>

        <div className="section_9 section_image_people">
          <img alt="man_desk_degree" className="image-med-overflow margin-side" src={man_desk_degree} />
        </div>



        <p className="text-lg-black text-center font-weight-bold">Want more?<br/> Subscribe to our newsletter</p>
        <div id = 'about-container' className = 'padding-bottom-small '>
        <NewsSubscription/>
        </div>
        <br/>
        <br/>
        
        <p className ='text-xs-grey text-center'>Add some helper text here to explain the finer details of <br/> your product or service. </p>
        <div className="about-rectangle"></div>
    </div>    
    
    )
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(AboutPageContainer)