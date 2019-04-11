import React, { Component } from 'react'
import {home_hva_logo,home_test_logo} from '../../images/imagelinks'

export default class Course extends Component {
    render(){
        return(
            <div className="section_7 section_university_logos">

            <div className="hu_logo">
              <p>“Saves me the hassle of studying. Acaboo does everything everywhere.”</p>
              <img className="home_hva_logo_small" src={home_hva_logo} />
              <p>David de Bie, <br />Business Administration student, VU</p>
            </div>
  
            <div className="hu_logo">
              <p>“It enables my students to get the most out of a course, everytime...”</p>
              <img className="home_hva_logo_small" src={home_test_logo} />
              <p>Paul de Groot, <br />Mathematics teacher UVA</p>
            </div>
  
            <div className="hu_logo">
              <p>“Saves me the hassle of studying. Acaboo does everything everywhere.”</p>
              <img className="home_hva_logo_small" src={home_test_logo} />
              <p>Emma de Leeuw, <br />Business teacher, UVA</p>
            </div>
  
            
          </div>
        )
    }
}