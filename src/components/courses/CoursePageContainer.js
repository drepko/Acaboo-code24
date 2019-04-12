import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import { getCourses } from '../../actions/courses'
import CourseFilterbar from './CourseFilterbar'
import {getHighLights} from '../../actions/courses'
import {withRouter} from 'react-router'


class CoursePageContainer extends PureComponent {

    componentWillMount = () => {
        const { study, location } = this.props
        study !== null && location.pathname.indexOf('courses') > 0 && this.props.getCourses(study.id)
        location.pathname.indexOf('highlights') > 0 && this.props.getHighLights()
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.study !== this.props.study) {
            this.props.getCourses(this.props.study.id)
        }
    }

    signUp = (event) => {
        console.log(event.target.value)
        // this.setState({
        //     selectedCourseId: event.target.value
        // })
    }

    subscribe = (event) => {
        this.props.history.push(`/course/${event.target.value}/subscribe`)
    }

    renderCourses = (courses) => {
        return (
            courses.map((course, index) => {
                return (
                    <Course
                        key={index}
                        course={course}
                        signUp={course.provided ? this.signUp : this.subscribe} />
                )
            })
        )
    }

    render() {

        const { courses } = this.props

        if (courses === null) return <p>Loading...</p>

        return (
            <div>
                <CourseFilterbar history={this.props.history}/>
                {this.renderCourses(courses)}
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses,
    study: state.selectedStudy
})

export default withRouter(connect(mapStateToProps, { getCourses, getHighLights })(CoursePageContainer))

