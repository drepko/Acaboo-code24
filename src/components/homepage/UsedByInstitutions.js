import React, { Component } from 'react'
import Universiteit_Leiden from '../../images/universities/Universiteit_Leiden.png'
import UvA from '../../images/universities/UvA.png'

export default class UsedByInstitutions extends Component {
  render() {
    return (
        <div className="flex-column jc">
            <p className="text-xs-black">TRUSTED BY STUDENTS FROM:</p>
            <div className="flex-row jc ai-start fw logo-p">
            <div className="">
                <img alt="uvl_logo" className="logo-p image-small" src={Universiteit_Leiden} />
            </div>
            <div>
                <img alt="uva_logo" className="logo-p image-small" src={UvA} />
            </div>
            <div>
                <img alt="hva_logo" className="logo-p image-small" src={Universiteit_Leiden} />
            </div>
            </div>
        </div>
    )
  }
}