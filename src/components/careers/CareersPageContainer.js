import React from 'react'
import Mission from './Mission'
import OpenPosition from './OpenPosition'
import LifeComponent from './LifeAt'
import {home_man_walking} from '../../images/imagelinks'
import '../../styles/CareersPageContainer.css'
import AboutUsButton from '../about/AboutUsButton'


class CareersPageContainer extends React.Component {
  
  render() {
    return (
      <div className="hiring-page">
      <h3>Join the team</h3>
      <h1>We are Acaboo. Help shape the future of education.</h1>
        <Mission/>
        <OpenPosition/>
        <LifeComponent/>
        <div className="life_at">
          <img alt="home_man_walking" className="home_man_walking" src={home_man_walking} />
        </div>
        <AboutUsButton/>
      </div>
    )
  }
}



export default CareersPageContainer