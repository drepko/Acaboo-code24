import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import Mission from './Mission'
import OpenPosition from './OpenPosition'
import LifeComponent from './LifeAt'
import {home_man_walking} from '../../images/imagelinks'
import '../../styles/CareersPageContainer.css'


class CareersPageContainer extends React.Component {
  
  render() {
    return (
      <div className = "hiring-page">
      <h3>Join the team</h3>
      <h1>We are Acaboo. Help shape the future of education.</h1>
        <Mission/>
        <OpenPosition/>
        <LifeComponent/>
        <div className="life_at">
            <img className="home_man_walking" src={home_man_walking} />
          </div>
          <h1>Reimagine education with us</h1>
          <Link to="/about"><button>Learn more about Acaboo</button></Link>
      </div>
    )
  }
}



export default CareersPageContainer