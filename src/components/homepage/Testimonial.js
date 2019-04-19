import React, { Component } from 'react'
import UvA from '../../images/universities/UvA.png'
import '../../styles/LandingsPageContainer.css'

export default class Testimonal extends Component {
    render(){
        return(
          <div className="flex-column ">

          <div className="text-center">
            <p className="text-lg-black">
              Loved by students and teachers
            </p>
          </div>

          <div className="flex-row jc fw main-column-div">

          <div className="main-column-div width-30">
          <div>
            <p className="text-sm-black">“Saves me the hassle of <br/>studying. Acaboo does <br/>everything everywhere.”</p>
            <div className="">
              <img alt="Business Administration" className="image-xsmall float-left" src={UvA} />
              <div className="text-sm-grey float-left">
                <p>David de Bye, <br />Business Administration, UVA</p>
              </div>  
            </div>
            </div>
          </div>

          <div className="main-column-div width-30">
          <div>
            <p className="text-sm-black">“It enables my students to <br/>get the most out of a course, <br/>everytime...”</p>
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
            <p className="text-sm-black">“Saves me the hassle of <br/>studying. Acaboo does <br/>everything everywhere.”</p>
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