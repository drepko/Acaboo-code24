import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StartStudying extends Component {
  render() {
    return (
        <div className="main-column-div padding-bottom-large">
          <h1 className="text-lg-black padding-bottom-30">Start studying with Acaboo.</h1>
          <div className="flex-row jc-between main-column-div padding-bottom-small">
            <div className="">
                <Link to="/courses">
                <button className="form-control form-control-sm btn-blue-med text-sm-white">
                Browse courses
                </button>
                </Link>
            </div>
            <div className="">
                <Link to="/about">
                <button className="margin-left form-control form-control-sm btn-white-med text-sm-white">
                Learn More
                </button>
                </Link>  
            </div>
          </div>
          <p className="text-xs-grey ">Add some helper text here to explain the finer details of your product or service.</p>
        </div>
    )
  }
}