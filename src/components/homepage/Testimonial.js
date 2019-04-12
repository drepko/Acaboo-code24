import React, { Component } from 'react'
import {home_hva_logo } from '../../images/imagelinks'
import '../../styles/LandingsPageContainer.css'

export default class Course extends Component {
    render(){
        return(
          <div className="section_7 section_university_logos">

          <div className="section_7_1">
            <h2>
              Loved by students and teachers
            </h2>
          </div>

          <div className="section_7_2">

          <div className="section_7_2_1">
              <div className="section_7_2_1_p">
                <p>“Saves me the hassle of studying. Acaboo does everything <br />everywhere.”</p>
              </div>  

              <div className="section_7_2_2">
                <div className="section_7_2_2_img">
                <img alt="hva_logo" className="home_hva_logo_small" src={home_hva_logo} />
                </div>
                <div className="section_7_2_2_p">
                  <p>David de Bye, <br />Business Administration, UVA</p>
                </div>  
              </div>
            </div>

            <div className="section_7_2_1">
              <div className="section_7_2_1_p">
                <p>“It enables my students to get the most out of a course, everytime...”</p>
              </div>  

              <div className="section_7_2_2">
                <div className="section_7_2_2_img">
                  <img alt="hva_logo" className="home_hva_logo_small" src={home_hva_logo} />
                </div>
                <div className="section_7_2_2_p">
                  <p>Paul de Groot, <br />Mathematics teacher, UVA</p>
                </div>
              </div>
            </div>

            <div className="section_7_2_1">
              <div className="section_7_2_1_p">
                <p>“Saves me the hassle of studying. Acaboo does everything <br />everywhere.”</p>
              </div>  

              <div className="section_7_2_2">
                <div className="section_7_2_2_img">
                  <img alt="hva_logo" className="home_hva_logo_small" src={home_hva_logo} />
                </div>
                <div className="section_7_2_2_p">
                  <p>Emma de Leeuw, <br />Business teacher, UVA</p>
                </div>
              </div>
            </div>

            
        </div>
        
        </div> 

       

        )
    }
}