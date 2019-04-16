import React from 'react'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';

import woman_desk from '../../images/mock-ups/woman_desk.png'
import man_handshake from'../../images/mock-ups/man_handshake.png'
import people from'../../images/mock-ups/people.png'

import {
  home_studydashboard,
} from '../../images/imagelinks'

import UsedByInstitutions from './UsedByInstitutions'
import BrowseCourse from './BrowseCourse'
import Testimonial from './Testimonial'
import StartStudying from './StartStudying';

class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="flex-row fw jc-center ai-start-reverse"> 
        

          <div className="flex-column half-width padding-top">
          
            <div className="half-width ai-start">

              <div className="half-width ai-start">
                <p className="text-xl-black"> Pass your exam <br/>with ease
                </p>
              </div>

              <div className="half-width ai-start">
                <p className="text-sm-med-grey">
                  Sed ut perspiciatis unde omnis iste natus <br/>error sit voluptatem accusantium.
                </p>
              </div> 

            </div>
                <FindCourseContainer history={this.props.history} />
          </div>

          <div className="half-width">
            <img alt="image" className="image-lg" src={woman_desk} />
          </div>

        </div>
        

        <UsedByInstitutions />

        <div className="text-center">
            <p className="text-lg-black">Study more efficiently with Acaboo.</p>
            <p className="text-sm-med-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        </div>

        <div className="padding-top">
          <img alt="image" className="image-lg-overflow shadow" src={home_studydashboard} />
        </div>

        <div className="flex-row" >
       
          <div className="flex-column ai-start small-width">

            <div className="">
              <p className="text-med-black">About Acaboo</p>
              <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
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

          <div className="med-width">
            <img alt="image" className="image-lg-overflow" src={man_handshake} /> 
          </div> 

        </div>

        <BrowseCourse/>

        <Testimonial />

        <div className="text-center">
          <p className="text-lg-black">Too much distraction, no focus? </p>
          <p className="font-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
        </div>

      <div className="section_9 section_image_people">
          <img alt="image" className="image-lg-overflow" src={people} />
        </div>

        <StartStudying/>
    </div>)
  }
}

export default LandingsPageContainer