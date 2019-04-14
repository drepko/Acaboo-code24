import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import { getCourses } from '../../actions/courses'
import CourseFilterbar from './CourseFilterbar'
import { getHighLights } from '../../actions/courses'
import { withRouter } from 'react-router'
import { selectCourse } from '../../actions/paymentFlow'
import Cart from './Cart'


class CoursePageContainer extends PureComponent {

    componentWillMount = () => {
        const { study, location } = this.props
        study !== null && location.pathname.indexOf('courses') > 0 && this.props.getCourses(study.id)
        location.pathname.indexOf('highlights') > 0 && this.props.getHighLights()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.study !== this.props.study) {
            this.props.getCourses(this.props.study.id)
        }
    }

    signUp = (event) => {
        const course = this.props.courses.find((course) => {
            return course.id === Number(event.target.value)
        })
        if (!this.props.selectedCourses.includes(course)) {
            this.props.selectCourse(course)
        }

    }

    subscribe = (event) => {
        this.props.history.push(`/course/${event.target.value}/subscribe`)
    }

    renderCourses = (courses) => {
        return (
            <div>
                {this.props.selectedCourses.length > 0 &&
                    <div><Cart selectedCourses={this.props.selectedCourses} />
                        <button>Checkout</button>
                    </div>
                }

                {courses.map((course, index) => {
                    return (
                        <div>
                            <Course
                                key={index}
                                course={course}
                                signUp={course.provided ? this.signUp : this.subscribe} />
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {

        const { courses } = this.props

        if (courses === null) return <p>Loading...</p>

        return (
            <div>
                <CourseFilterbar history={this.props.history} />
                {this.renderCourses(courses)}
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses,
    study: state.selectedStudy,
    selectedCourses: state.selectedCourses
})

export default withRouter(connect(mapStateToProps, { getCourses, getHighLights, selectCourse })(CoursePageContainer))

