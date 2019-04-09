import React, { Component } from 'react'

export default class Course extends Component {

    renderUniversityOptions = () => {
        return (
            <select onChange={this.props.handleChange}>
                {this.props.universities.map((university) => {
                    return <option key={university.id} id={university.id} value={university.name}>{university.name}</option>
                })}
            </select>
        )
    }

    renderStudyOptions = (university) => {
        return (
            <p>{university.id}</p>
        )
    }

    render() {
        const {university} = this.props
        return (
            <div>
                {this.renderUniversityOptions()}
                {university !== null && this.renderStudyOptions(university)}
            </div>
        )
    }
}