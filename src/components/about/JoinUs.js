import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Team extends Component {
  render() {
    return (
      <div className ="text-box-med">
        <p className ='text-med-black font-weight-bold'>Join Us </p>
        <p className ='text-sm-black'>Acaboo is based in the beautiful Amsterdam. We are a diverse group of people interested in education, tecnology and the future of life!</p>
        <p className ='text-sm-black'>Interested in joining us? <Link to = '/careers'>Learn more here</Link></p>

      </div>
    )
  }
}