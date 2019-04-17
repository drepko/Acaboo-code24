import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CourseFilter.css'

 class CourseFilter extends Component {

    renderUniversityOptions = () => {
         return (
            <select value = {this.props.selectedUniversity ? this.props.selectedUniversity.name : ""} onChange={this.props.handleUniversitySelect}>
                <option value="" disabled selected>Select a university...</option>
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

                <select value = {this.props.selectedStudy ? this.props.selectedStudy.name : ""} onChange={this.props.handleStudySelect}>
                    <option value="" disabled selected>{`${this.props.selectedUniversity ? "Select a study" :"Select a university first..."}`}</option>
                    {this.props.studies.map((studie) => {
                        return <option key={studie.id} id={studie.id} value={studie.name}>{studie.name}</option>
                    })}
                </select>
            )
        }
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
const mapStateToProps = state => {
	return {
		selectedUniversity: state.selectedUniversity,
		selectedStudy: state.selectedStudy
	}
}
export default connect(mapStateToProps)(CourseFilter)
