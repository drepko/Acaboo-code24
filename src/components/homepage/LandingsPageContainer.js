import React from 'react'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';
import desklamp from '../../images/mock-ups/deskLamp.png'
import Universiteit_Leiden from '../../images/universities/Universiteit_Leiden.png'
import UvA from '../../images/universities/UvA.png'
import man_handshake from'../../images/mock-ups/man_handshake.png'
import people from'../../images/mock-ups/people.png'

import {
  home_studydashboard,
} from '../../images/imagelinks'

import BrowseCourse from './BrowseCourse'
import Testimonial from './Testimonial'

class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="flex-row jc">
          <div className="flex-column">
            <div>
                <h1>The best way to <br />study for your exam</h1>
                <p>Sed ut perspiciatis unde omnis iste natus <br />error sit voluptatem accusantium.</p>
            </div>

            <div>
                <FindCourseContainer history={this.props.history} />
            </div>
          </div>

          <div>
            <img alt="image" className="image-lg" src={desklamp} />
          </div>
        </div>
        

        <div className="flex-column jc">
          <h6>TRUSTED BY STUDENTS FROM:</h6>
          <div className="flex-row jc logo-p">
            <img alt="hva_logo" className="logo-p" src={Universiteit_Leiden} />
            <img alt="hva_logo" className="logo-p" src={UvA} />
            <img alt="hva_logo" className="logo-p" src={Universiteit_Leiden} />
          </div>
        </div>

        <div className="text-center">
            <h1>Study more efficiently with Acaboo.</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        </div>

        <div className="">
          <img alt="image" className="image-lg" src={home_studydashboard} />
        </div>

        <div className="flex-row" >

          <div className="flex-column align-start">

            <div className="text-box-lg">
              <h1>About Acaboo</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
              <Link to="/about">Learn more &#8594;</Link>
            </div>
            <div className="text-box-med">
              <h4>Feature 1</h4>
              <p>  Sed ut perspiciatis unde omnis iste <br />
                natus error sit voluptatem<br />
                accusantium.</p>
            </div>
            <div className="text-box-med">
              <h4>Feature 2</h4>
              <p>  Sed ut perspiciatis unde omnis iste <br />
                natus error sit voluptatem <br />
                accusantium.</p>
            </div>
            

          </div>

          <div className="section_5_2">
            <img alt="image" className="image-med" src={man_handshake} /> 
          </div> 

        </div>

        <BrowseCourse/>

        <Testimonial />

        <div className="text-center">
          <h1>Too much distraction, no focus? </h1>
          <p className="font-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
        </div>

      <div className="section_9 section_image_people">
          <img alt="image" className="image-lg" src={people} />
        </div>

        <div className="text-center">
          <h1 className="text-med">Start studying with Acaboo.</h1>
          <div className="flex-row jc">
            <div>
            <Link to="/highlights"><button className="btn-white-med">Browse courses</button></Link>
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