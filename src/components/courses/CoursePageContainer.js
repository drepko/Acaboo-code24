import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import { getCourses } from '../../actions/courses'
import EmailWhenAvailable from './EmailWhenAvailable';
import CourseFilterbar from './CourseFilterbar'

class CoursePageContainer extends PureComponent {

    componentWillMount = () => {
        const { study } = this.props
        study !== null && this.props.getCourses(study.id)
    }

    signUp = (event) => {
        console.log(event.target.value)
    }

    subscribe = (event) => {
        this.props.history.push(`/course/${event.target.value}/subscribe`)
    }

    renderCourses = (courses) => {
        return (
            courses.map((course) => {
                return (
                    <Course
                        key={course.name}
                        course={course}
                        signUp={course.provided ? this.signUp : this.subscribe} />
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
                <CourseFilterbar />
                {this.renderCourses(courses)}
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses,
    study: state.selectedStudy
})

export default connect(mapStateToProps, { getCourses })(CoursePageContainer)

