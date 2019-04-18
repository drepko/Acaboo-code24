import React from 'react'
import Mission from './Mission'
import OpenPosition from './OpenPosition'
import LifeComponent from './LifeAt'
import man_handshake from '../../images/mock-ups/man_handshake.png'
import '../../styles/CareersPageContainer.css'
import AboutUsButton from '../about/AboutUsButton'


class CareersPageContainer extends React.Component {
  
  render() {
    return (
      <div className="hiring-page">
      <p className="text-sm-med-grey">Join the team</p>
      <p className="text-lg-black">We are Acaboo. <br/>Help shape the future of education.</p>
        <Mission/>
        <OpenPosition/>
        <LifeComponent/>
        <div className="med-width">
            <img alt="man_handshake" className="image-med margin-side" src={man_handshake} /> 
        </div>
        <AboutUsButton/>
      </div>
    )
  }
}



export default CareersPageContainer