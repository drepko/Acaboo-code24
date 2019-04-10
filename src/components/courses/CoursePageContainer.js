import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import {getCourses} from '../../actions/courses'

class CoursePageContainer extends PureComponent {

    componentWillMount = () => {
        const {study} = this.props
        study !== null && this.props.getCourses(study.id)
    }

    renderCourses = (courses) => {
        return (
            courses.map((course) => {
                return (
                course.provided === true ? <Course key={course.name} course={course} />
                :
                null
                )
            })
        )
    }

    render() {

        const { courses } = this.props

        if (courses === null) return <p>Loading...</p>
        console.log(courses)
        return (
            <div>
                {this.renderCourses(courses)}
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses,
    study: state.selectedStudy
})

export default connect(mapStateToProps, { getCourses })(CoursePageContainer)
