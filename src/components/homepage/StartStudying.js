import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StartStudying extends Component {
  render() {
    return (
        <div className="main-column-div">
          <h1 className="text-lg-black">Start studying with Acaboo.</h1>
          <div className="flex-row jc-between main-column-div">
            <div className="padding-side-small ">
                <Link to="/courses">
                <button className="form-control form-control-sm btn-blue-lg text-sm-white">
                Browse courses
                </button>
                </Link>
            </div>
            <div className="padding-side-small ">
                <Link to="/about">
                <button className="form-control form-control-sm btn-white-lg text-sm-white">
                Learn More
                </button>
                </Link>  
            </div>
          </div>
          <p className="text-xs-grey">Add some helper text here to explain the finer details of your product or service.</p>
        </div>
    )
  }
}