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
        if (studies && studies.length > 0) {
            return (

                <select onChange={this.props.handleStudySelect}>
                    <option value="" disabled selected>Study</option>
                    {this.props.studies.map((studie) => {
                        return <option key={studie.id} id={studie.id} value={studie.name}>{studie.name}</option>
                    })}
                </select>
            )
        }
    }

    render() {
        const { study } = this.props
        return (
            <div className="filter-bar">
                <form >
                    {this.renderUniversityOptions()}
                    {this.renderStudyOptions()}
                    {/* {study && study.name !== null && <input type="submit" value="Find your course" />} */}
                </form>
            </div>
        )
    }
}