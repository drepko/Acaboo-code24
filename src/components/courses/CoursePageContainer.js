import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import {getCourses} from '../../actions/courses'
import EmailWhenAvailable from './EmailWhenAvailable';

import CourseFilterbar from './CourseFilterbar'
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
                : null
                
                )
            })
        )
    }

    render() {

        const { courses } = this.props

        if (courses === null) return <p>Loading...</p>
<<<<<<< HEAD
        console.log(courses)
        if (courses.length === 0) return <EmailWhenAvailable courses = {this.props.courses} study = {this.props.study}/>
=======
>>>>>>> dev
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

