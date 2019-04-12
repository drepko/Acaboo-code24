import React, { Component } from 'react'
import desklamp from '../../images/mock-ups/deskLamp.png'

export default class AboutPage extends Component {
  render() {
    return (
      <div className ="about-us-main">
        <h3>About Acaboo</h3>
        <h1>Together we reimagine education </h1>
        <div className="desk-lamp-about-us">
            <img className="search_image_1" src={desklamp} />
          </div>
      </div>
    )
  }
}