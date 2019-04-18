import React from 'react'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';

import woman_desk from '../../images/mock-ups/woman-desk2.png'
import man_handshake from'../../images/mock-ups/man_handshake.png'
import people from'../../images/mock-ups/people.png'
import course_dashboard from '../../images/course_dashboard.png'

import UsedByInstitutions from './UsedByInstitutions'
import BrowseCourse from './BrowseCourse'
import Testimonial from './Testimonial'
import StartStudying from './StartStudying';

class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main-column">

        <div className="flex-row fw">


          <div id="flex-find-course"className="flex-row half-width padding-top">

            <div className="half-width ">

            <div className="flex-column">
              <div className="half-width ">
                <p className="text-xl-black"> The new way of studying
                </p>
              </div>

              <div className="half-width ">
                <p className="text-sm-med-grey">
                  Digital study books with interactive questions. Pass you exam with ease!
                </p>
              </div>

            </div>
            <FindCourseContainer history={this.props.history} />
            </div>

            <div className="half-width">
            <img id="women-desk-img" alt="woman_desk"  src={woman_desk} />
          </div>
          </div>



        </div>


        <UsedByInstitutions />

        <div className="text-center">
          <p className="text-lg-black">Study more efficiently with Acaboo.</p>
          <p className="text-sm-med-grey">Acaboo guides you along your course. We help you plan for your exam. Earn points for finished chapters, study together and ask for feedback from your teacher.</p>
        </div>

        <div className="padding-top">
          <img alt="home_studydashboard" className="image-lg-overflow" src={course_dashboard} />
        </div>

        <div className="flex-row about-box padding-top" >

          <div className="flex-column ai-start small-width padding-top">

            <div id="about-and-picture">
              <div id='about-flex-child-one'>

                {/* <div className="text-box-med">
                  <p className="text-med-black">About Acaboo</p>
                  <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                  <Link to="/about" className="text-med">Learn more &#8594;</Link>
                </div> */}

                <div className="text-box-med" id='text-box'>
                  <p className="text-med-black">About Acaboo</p>
                  <p className="text-sm-grey"> Acaboo is an online study book<br/> 
                  platform with study books from</p>
                  <Link to="/about" className="text-med">Learn more &#8594;</Link>
                </div>

                <div className="text-box-med">
                  <p className="text-sm-black"><br/>Your books, always online.</p>
                  <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </div>
                <div className="text-box-med">
                  <p className="text-sm-black"><br/>Cheaper then physical books.</p>
                  <p className="text-sm-grey">Books on Acaboo are cheaper because we can cut on distribution and printing costs. Also better for the environment.</p>
                </div>
              </div>

              <div id='about-flex-child-two'>
                <div className="">
                  <img alt="man_handshake" className="image-lg-overflow" src={man_handshake} />
                </div>
              </div>

            </div>
            {/* </div>   */}
          </div>



        </div>

        <BrowseCourse />

        <Testimonial />

        <div className="text-center">
          <p className="text-lg-black">Too much distraction, no focus?</p>
          <p className="font-grey">Acaboo helps you focus on the right moments. Together we save your exams.</p>
        </div>

        <div className="section_9 section_image_people">
          <img alt="people" className="image-lg-overflow" src={people} />
        </div>

        <StartStudying/>
    </div>)
  }
}

export default LandingsPageContainer