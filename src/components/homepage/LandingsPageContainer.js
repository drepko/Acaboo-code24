import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import FindCourseContainer from './FindCourseContainer';
import '../../styles/LandingsPageContainer.css'
import {home_lamp_img, home_hva_logo, home_studydashboard, home_man_walking} from '../../images/imagelinks'
import LoginLink from '../login/LoginLink'
import Testimonial from './Testimonial'
class LandingsPageContainer extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="section_1 section_search">

          <div className="search_course">
            <FindCourseContainer history={this.props.history} />
          </div>

          <div className="search_image">
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
          <h1>Study more efficiently with Acaboo.</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        </div>

        <div className="section_4 section_coursedashboard">
          <img className="cd_image" src={home_studydashboard} />
        </div>

        <div className="section_5 section_about_us" >

          <div>

            <div className="about_us_1">
              <h1>About Acaboo</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
              <Link to="/about">Learn more &#8594;</Link>
            </div>

            <div className="about_us_2">
              <div className="about_us_2_1">
                <p>Feature 1 <br />
                  Sed ut perspiciatis unde omnis iste <br />
                  natus error sit voluptatem<br />
                  accusantium.</p>
              </div>
              <div>
                <p className="about_us_2_1">Feature 2 <br />
                  Sed ut perspiciatis unde omnis iste <br />
                  natus error sit voluptatem <br />
                  accusantium.</p>
              </div>
            </div>

          </div>
          
          <div className="about_us_3">
            <img className="home_man_walking" src={home_man_walking} />
          </div>

        </div>

        <div className="section_6 section_start_studying" > 
          <div className="ss_div">
            <h1>Start studying with Acaboo</h1><Link to="/courses"><button>Browse courses</button></Link>
            <LoginLink/>
          </div>
        </div>

        <Testimonial/>

        <div>
            <h1>Too much distraction, no focus? </h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            <img src='https://s3-alpha-sig.figma.com/img/9682/9cf9/f50543efc622f16b18446ac498d06bd3?Expires=1555891200&Signature=Qn~vpVh5p~wAYr9ck8Icd~0Cd-SYAwxYU3YgjrRrFoY9~avnuJ8QPV7nsf95mKx47o23gYZXBwokyyNVrhfCr8NylBJ2-5NP6NW8wqQrAHvm3RS3K4xlIvOsIGlrOfhiLlOfXtByJ2SdlUtJ-NNVpHuU~0~RWUbp0XjHZhvjMChyujepNGZoA2lju1-GoXIjOEoDl~EflvcjP-HQKXI86gtUITDqlPYKqvuE9OBwF59tgQfVsG9Pxe9OKGHI0IobSURVVEnB7epWDgbZ-SenLxDw9Jw1CprdZu7L55QYNdwDkdTz0UQrD-pXg7gerMGFVkzI1srevdWwasuN6PeFQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
        </div>

        <div>
          <h1>Start studying with Acaboo.</h1>
          <Link to="/courses"><button>Browse courses</button></Link>
          <Link to="/about"><button>Learn More</button></Link>
        </div>
        

      </div>)
  }
}


const mapStateToProps = state => ({

})

export default LandingsPageContainer