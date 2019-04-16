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

          <div className="flex-row jc fw">

          <div >
            <p className="text-sm-black">“Saves me the hassle of <br/>studying. Acaboo does <br/>everything everywhere.”</p>
            <div className="flex-row flex-start top">
              <img alt="image" className="image-xsmall" src={UvA} />
              <div className="top text-sm-grey">
                <p>David de Bye, <br />Business Administration, UVA</p>
              </div>  
            </div>
          </div>

          <div >
            <p className="text-sm-black">“It enables my students to <br/>get the most out of a course, <br/>everytime...”</p>
            <div className="flex-row flex-start top">
              <img alt="image" className="image-xsmall" src={UvA} />
              <div className="top text-sm-grey">
                <p>Paul de Groot, <br />Mathematics teacher, UVA</p>
              </div>
            </div>
          </div>

          <div >
            <p className="text-sm-black">“Saves me the hassle of <br/>studying. Acaboo does <br/>everything everywhere.”</p>
            <div className="flex-row flex-start top">
              <img alt="image" className="image-xsmall" src={UvA} />
              <div className="top text-sm-grey">
                <p>Emma de Leeuw, <br />Business teacher, UVA</p>
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
}