import React, { Component } from 'react'
import UvA from '../../images/universities/UvA.png'
import '../../styles/LandingsPageContainer.css'

export default class Testimonal extends Component {
    render(){
        return(
          <div id="testimonial-container" className="flex-column padding-top border-bottom-grey padding-bottom-large">

          <div className="text-center">
            <p className="text-lg-black">
              Loved by students and teachers
            </p>
          </div>

          <div className="flex-row jc fw main-column-div">

          <div className="main-column-div width-30 border-right">
          <div>
            <p className="text-sm-black padding-bottom-30">“Saves me the hassle of studying. Acaboo does everything everywhere.”</p>
            <div className="">
              <img alt="Business Administration" className="image-xsmall float-left" src={UvA} />
              <div className="text-sm-grey float-left">
                <p>David de Bye, <br />Business Administration, UVA</p>
              </div>  
            </div>
            </div>
          </div>

          <div className="main-column-div width-30 border-right">
          <div>
            <p className="text-sm-black padding-bottom-30">“It enables my students to get the most out of a course, everytime...”</p>
            <div className="">
              <img alt="Mathematics teacher" className="image-xsmall float-left" src={UvA} />
              <div className="text-sm-grey float-left">
                <p>Paul de Groot, <br />Mathematics teacher, UVA</p>
              </div>
            </div>
          </div>
          </div>

          <div className="main-column-div width-30">
          <div>
            <p className="text-sm-black padding-bottom-30">“Saves me the hassle of studying. Acaboo does everything everywhere.”</p>
            <div className="">
              <img alt="Business teacher" className="image-xsmall float-left" src={UvA} />
              <div className="text-sm-grey float-left">
                <p>Emma de Leeuw, <br />Business teacher, UVA</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>)
    }
}