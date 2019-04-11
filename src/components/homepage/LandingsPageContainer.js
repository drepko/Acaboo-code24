import React from 'react'
//import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';
import '../../styles/LandingsPageContainer.css'
import {home_lamp_img, 
        home_hva_logo, 
        home_studydashboard, 
        home_man_walking,
        home_people} from '../../images/imagelinks'

class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="section_1 section_search">

          <div className="section_1_1 section_search_box">

            <div className="section_1_1_1 section_search_text">
              <h1>The best way to <br/>study for your exam</h1>
              <p>Sed ut perspiciatis unde omnis iste natus <br/>error sit voluptatem accusantium.</p>
            </div>

            <div className="section_1_1_2 section_search_form">
              <FindCourseContainer history={this.props.history} />
            </div>
          </div>

          <div className="section_1_2 section_search_image">
            <img className="search_image_1" src={home_lamp_img} />
          </div>
        
        </div>

        <div className="section_2 section_university_logos">
          <div className="hu_logo">
            <img className="home_hva_logo_large" src={home_hva_logo} />
          </div>
          <div className="hu_logo">
            <img className="home_hva_logo_large" src={home_hva_logo} />
          </div>
          <div className="hu_logo">
            <img className="home_hva_logo_large" src={home_hva_logo} />
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
            <img className="section_5_2_image" src={home_man_walking} />
          </div>

        </div>

        <div className="section_6 section_start_studying" > 
          <div className="section_6_1 ss_div">
            <h1>Start studying with Acaboo</h1>
            <Link to="/courses"><button className="btn_blue">Browse courses</button></Link>
          </div>
          <div className="section_6_2 ss_div">
            <p>Already using Acaboo? <Link to='/logins'>Log In</Link> </p>
          </div>
        </div>

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
                  <img className="home_hva_logo_small" src={home_hva_logo} />
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
                  <img className="home_hva_logo_small" src={home_hva_logo} />
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
                  <img className="home_hva_logo_small" src={home_hva_logo} />
                </div>
                <div className="section_7_2_2_p">
                  <p>Emma de Leeuw, <br />Business teacher, UVA</p>
                </div>
              </div>
            </div>

            
        </div>
        
        </div> 

        <div className="section_8 section_focus">
          <div className="section_8_1">
            <h1>Too much distraction, no focus? </h1>
          </div>
          <div className="section_8_2">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
          </div>    
        </div>

        <div className="section_9 section_image_people">
          <img className="ip_image_1" src={home_people} />
        </div>

        <div className="section_10 section_start_studying">
          <div className="section_10_1">
            <h1>Start studying with Acaboo.</h1>
          </div>
          <div className="section_10_2">
            <Link to="/courses"><button className="btn_white">Browse courses</button></Link>
            <Link to="/about"><button className="btn_blue">Learn More</button></Link>
          </div>
        </div>

      </div>)
  }
}

export default LandingsPageContainer