import React, { Component } from 'react'
import {home_hva_logo } from '../../images/imagelinks'
import '../../styles/LandingsPageContainer.css'

export default class Testimonal extends Component {
    render(){
        return(
          <div className="flex-column">

          <div className="text-center">
            <h2>
              Loved by students and teachers
            </h2>
          </div>

          <div className="flex-row ai-start">

          <div className="font-grey">
            <p>“Saves me the hassle of studying. Acaboo does everything <br />everywhere.”</p>
            <div className="flex-row">
              <img alt="image" className="image-small" src={home_hva_logo} />
              <div className="text-small">
                <p>David de Bye, <br />Business Administration, UVA</p>
              </div>  
            </div>
          </div>

          <div className="font-grey">
            <p>“It enables my students to get the most out of a course, everytime...”</p>
            <div className="flex-row">
              <img alt="hva_logo" className="image-small" src={home_hva_logo} />
              <div className="text-small">
                <p>Paul de Groot, <br />Mathematics teacher, UVA</p>
              </div>
            </div>
          </div>

          <div className="font-grey">
            <p>“Saves me the hassle of studying. Acaboo does everything <br />everywhere.”</p>
            <div className="flex-row flex-start">
              <img alt="hva_logo" className="image-small" src={home_hva_logo} />
              <div className="text-small">
                <p>Emma de Leeuw, <br />Business teacher, UVA</p>
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
}