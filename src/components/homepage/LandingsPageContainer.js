import React from 'react'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';
import '../../styles/LandingsPageContainer.css'
import desklamp from '../../images/mock-ups/deskLamp.png'
import Universiteit_Leiden from '../../images/universities/Universiteit_Leiden.png'
import UvA from '../../images/universities/UvA.png'
import man_handshake from'../../images/mock-ups/man_handshake.png'
import people from'../../images/mock-ups/people.png'

import {
  home_studydashboard,
} from '../../images/imagelinks'

import LoginLink from '../login/LoginLink'
import Testimonial from './Testimonial'
class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="section_1 section_search">

          <div className="section_1_1 section_search_box">

            <div className="section_1_1_1 section_search_text">
              <h1>The best way to <br />study for your exam</h1>
              <p>Sed ut perspiciatis unde omnis iste natus <br />error sit voluptatem accusantium.</p>
            </div>

            <div className="section_1_1_2 section_search_form">
              <FindCourseContainer history={this.props.history} />
            </div>
          </div>

          <div className="section_1_2 section_search_image">
            <img className="search_image_1" src={desklamp} />
          </div>

        </div>

        <div className="section_2 section_university_logos">
          <div className="hu_logo">
            <img className="home_hva_logo_large" src={Universiteit_Leiden} />
          </div>
          <div className="hu_logo">
            <img className="home_hva_logo_large" src={UvA} />
          </div>
          <div className="hu_logo">
            <img className="home_hva_logo_large" src={Universiteit_Leiden} />
          </div>
        </div>

        <div className="section_3 section_study_more">
          <div className="section_3_1">
            <h1>Study more efficiently with Acaboo.</h1>
          </div>
          <div className="section_3_2">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          </div>
        </div>

        <div className="section_4 section_coursedashboard">
          <img className="cd_image_1" src={home_studydashboard} />
        </div>

        <div className="section_5 section_about_us" >

          <div className="section_5_1">

            <div className="section_5_1_1 about_us_1">
              <h1>About Acaboo</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
              <Link to="/about">Learn more &#8594;</Link>
            </div>

            <div className="section_5_1_2">
              <div className="section_5_1_2_1">
                <h4>Feature 1</h4>
                <p>  Sed ut perspiciatis unde omnis iste <br />
                  natus error sit voluptatem<br />
                  accusantium.</p>
              </div>
              <div className="section_5_1_2_2">
                <h4>Feature 2</h4>
                <p>  Sed ut perspiciatis unde omnis iste <br />
                  natus error sit voluptatem <br />
                  accusantium.</p>
              </div>
            </div>

          </div>

          <div className="section_5_2">
            <img className="section_5_2_image" src={man_handshake} />
          </div>

        </div>

        <div className="section_6 section_start_studying" >
          <div className="section_6_1">
            <div>
              <h1>Start studying with Acaboo</h1>
            </div>
            <div>
              <Link to="/highlights"><button className="btn_blue">Browse courses</button></Link>
            </div>
          </div>
          <div className="section_6_2">
            <LoginLink />
          </div>
        </div>


        <Testimonial />

        <div className="section_8 section_focus">
          <div className="section_8_1">
            <h1>Too much distraction, no focus? </h1>
          </div>
          <div className="section_8_2">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
          </div>
        </div>

        <div className="section_9 section_image_people">
          <img className="ip_image_1" src={people} />
        </div>

        <div className="section_10 section_start_studying">
          <div className="section_10_1">
            <h1>Start studying with Acaboo.</h1>
          </div>
          <div className="section_10_2">
            <Link to="/highlights"><button className="btn_white">Browse courses</button></Link>
            <Link to="/about"><button className="btn_blue">Learn More</button></Link>
          </div>
        </div>

      </div>)
  }
}

export default LandingsPageContainer