import React, { Component } from 'react'
import deskLamp from "../../images/mock-ups/deskLamp.png"
import woman_desk from  '../../images/mock-ups/woman_desk.png'
import man_handshake from '../../images/mock-ups/man_handshake.png'


export default class AboutPage extends Component {
  render() {
    return (
      <div className ="about-us-main">
        <h3 className="text-sm-med-grey">About Acaboo</h3>
        <p className="text-lg-black">Together we reimagine education </p>
        <div className="main-row img-with-text-vertical">
          <div className="desk-lamp-about-us">
          <img alt="desklamp" className="image_lg" src={deskLamp} />
          </div>

          <div className = "desk-lamp-paragraph-1">
              <p>
                Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study. <br/>
                <br/>Why? Well, study books are extremely expensive and students are a poor breed.
              </p>
          </div>
        </div>

        <div className="main-row img-with-text-vertical">
        <div className = "desk-lamp-paragraph-2">
        <p>
                Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study. <br/>
                <br/>Why? Well, study books are extremely expensive and students are a poor breed.
              </p>
        </div>

        <div className="women-desk-about-us">
        <img alt="woman_desk" className="image_lg" src={woman_desk} />
        </div>
        </div>
        <div className="text-center">
        <p className="text-lg-black">Study more efficient with Acaboo.</p>
        </div>
        <p className="text-sm-grey" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        <div className="med-width">
            <img alt="man_handshake" className="image-med" src={man_handshake} /> 
        </div>
      </div>
    )
  }
}
