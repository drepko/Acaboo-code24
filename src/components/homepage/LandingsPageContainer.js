import React from 'react'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';
import woman_desk from '../../images/mock-ups/woman_desk.png'
import Universiteit_Leiden from '../../images/universities/Universiteit_Leiden.png'
import UvA from '../../images/universities/UvA.png'
import man_handshake from '../../images/mock-ups/man_handshake.png'
import people from '../../images/mock-ups/people.png'

import {
  home_studydashboard,
} from '../../images/imagelinks'

import BrowseCourse from './BrowseCourse'
import Testimonial from './Testimonial'

class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="flex-row fw jc-center ai-start-reverse">


          <div className="flex-column half-width padding-top">

            <div className="half-width ai-start">

              <div className="half-width ai-start">
                <p className="text-xl-black"> Pass your exam <br />with ease
                </p>
              </div>

              <div className="half-width ai-start">
                <p className="text-sm-med-grey">
                  Sed ut perspiciatis unde omnis iste natus <br />error sit voluptatem accusantium.
                </p>
              </div>

            </div>
            <FindCourseContainer history={this.props.history} />
          </div>

          <div className="half-width">
            <img alt="image" className="image-lg" src={woman_desk} />
          </div>

        </div>


        <div className="flex-column jc">
          <p className="text-xs-black">TRUSTED BY STUDENTS FROM:</p>
          <div className="flex-row jc ai-start fw logo-p">
            <div className="">
              <img alt="uvl_logo" className="logo-p image-small" src={Universiteit_Leiden} />
            </div>
            <div>
              <img alt="uva_logo" className="logo-p image-small" src={UvA} />
            </div>
            <div>
              <img alt="hva_logo" className="logo-p image-small" src={Universiteit_Leiden} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg-black">Study more efficiently with Acaboo.</p>
          <p className="text-sm-med-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        </div>

        <div className="padding-top">
          <img alt="image" className="image-lg-overflow shadow" src={home_studydashboard} />
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
                  <p className="text-sm-black">Feature 1</p>
                  <p className="text-sm-grey">  Sed ut perspiciatis unde omnis iste <br />
                    natus error sit voluptatem<br />
                    accusantium.</p>
                </div>
                <div className="text-box-med">
                  <p className="text-sm-black">Feature 2</p>
                  <p className="text-sm-grey">  Sed ut perspiciatis unde omnis iste <br />
                    natus error sit voluptatem <br />
                    accusantium.</p>
                </div>
              </div>

              <div id='about-flex-child-two'>
                <div className="">
                  <img alt="image" className="image-lg-overflow" src={man_handshake} />
                </div>
              </div>

            </div>
            {/* </div>   */}
          </div>



        </div>

        <BrowseCourse />

        <Testimonial />

        <div className="text-center">
          <p className="text-lg-black">Too much distraction, no focus? </p>
          <p className="font-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
        </div>

        <div className="section_9 section_image_people">
          <img alt="image" className="image-lg-overflow" src={people} />
        </div>

        <div className="padding-top">
          <h1 className="text-lg-black">Start studying with Acaboo.</h1>
          <div className="flex-row jc">
            <div>
              <Link to="/courses"><button className="btn-white-med">Browse courses</button></Link>
            </div>
            <div>
              <Link to="/about"><button className="btn-blue-med">Learn More</button></Link>
            </div>
          </div>
          <p>Add some helper text here to explain the finer details of your product or service.</p>
        </div>
      </div>)
  }
}

export default LandingsPageContainer