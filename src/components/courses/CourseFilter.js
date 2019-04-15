import React, { Component } from 'react'
import './CourseFilter.css'

export default class CourseFilter extends Component {

    renderUniversityOptions = () => {
        return (
            <select onChange={this.props.handleUniversitySelect}>
                <option value="" disabled selected>University/Hogeschool</option>
                {this.props.universities.map((university) => {
                    return <option key={university.id} id={university.id} value={university.name}>{university.name}</option>
                })}
            </select>
        )
    }

    renderStudyOptions = () => {
        const { studies } = this.props
        return (
            
            studies === null ?
            <div className="select_option">
                <div >
                    <select disabled>
                        <option value="" disabled selected>First select your university</option>
                    </select><br/>
                </div>
            </div>
                :
            <div className="select_option">
                <div>
                    <select onChange={this.props.handleStudySelect}>
                        <option value="" disabled selected>Select your study...</option>
                            {this.props.studies.map((studie) => {
                                return <option key={studie.id} id={studie.id} value={studie.name}>{studie.name}</option>
                            })}
                    </select><br/>
                </div>
            </div>
        )
    }

    render() {
    
        return (
            <div className="filter-bar">
                <form >
                    {this.renderUniversityOptions()}
                    {this.renderStudyOptions()}
                </form>
            </div>
        )
    }
}