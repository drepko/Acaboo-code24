import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Team extends Component {
  render() {
    return (
      <div className ="join-us-main">
        <p className ='text-med-black font-weight-bold'>Join Us </p>
        <p className ='text-sm-med-black'>Acaboo is based in the beautiful Amsterdam. We are a diverse group of people interested in education, tecnology and the future of life!</p>
        <p>Interested in joining us? <Link to = '/careers'>Learn more here</Link></p>

      </div>
    )
  }
}