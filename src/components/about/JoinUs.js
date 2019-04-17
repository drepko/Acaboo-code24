import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Team extends Component {
  render() {
    return (
      <div className ="join-us-main">
        <h1>Join Us </h1>
        <p>Acaboo is based in the beautiful Amsterdam. We are a diverse group of people interested in education, tecnology and the future of life!</p>
        <p>Interested in joining us? <Link to =  './careers'>Learn more here</Link></p>

      </div>
    )
  }
}