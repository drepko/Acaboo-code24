import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import {getCourses} from '../actions/courses'

class CoursePageContainer extends PureComponent {

    componentWillMount() {
        const {studyId} = this.props.match.params
        this.props.getCourses(studyId)
    }
    renderCourses = (courses) => {
        return (
            courses.map((course) => {
                return <Course course={course}/>
            })
        )
    }

    render() {

        // if (this.props.currentUser) return (
		// 	<Redirect to="/" />
        // )
        
        const { courses } = this.props

        if (courses === null) return <p>Loading...</p>

        return (
            <div>
                {this.renderCourses(courses)}
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses
})

export default connect(mapStateToProps, {getCourses})(CoursePageContainer) //{  }

