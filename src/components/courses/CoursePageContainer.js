import React, { PureComponent } from 'react'
import Course from './Course'
import { connect } from 'react-redux'
import { getCourses } from '../../actions/courses'
import CourseFilterbar from './CourseFilterbar'
import { getHighLights } from '../../actions/courses'
import { withRouter } from 'react-router'
import { selectCourse } from '../../actions/paymentFlow'
import Cart from './Cart'
import people from'../../images/mock-ups/people.png'
 

class CoursePageContainer extends PureComponent {
   
    componentWillMount = () => {
        const { study } = this.props
        if (study !== null
        ) {
            this.props.getCourses(study.id)
        }
        else {
            console.log(study)
            this.props.getHighLights()
        }

    }

    componentDidUpdate = (prevProps) => {
        if (this.props.study && prevProps.study !== this.props.study) {
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

    // subscribe = (event) => {
    //     this.props.history.push(`/course/${event.target.value}/subscribe`)
    // }

    checkCurrentUser = () => {
        if (this.props.currentUser === null) {
            this.props.history.push('/signup')
        } else {
            this.props.history.push('/reviewpurchase')
        }
    }

    renderCourses = (courses) => {
        return (
            <div>
                {this.props.selectedCourses.length > 0 &&
                    <div><Cart selectedCourses={this.props.selectedCourses} />
                        <button onClick={this.checkCurrentUser}>Checkout</button>
                    </div>
                }

                {courses.map((course, index) => {
                    return (
                        <div>
                            <Course
                                key={index}
                                course={course}
                                signUp={this.signUp} />
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
                <img alt="people" className="image-lg-overflow ai-center" src={people} /> 
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses,
    study: state.selectedStudy,
    selectedCourses: state.selectedCourses,
    currentUser: state.currentUser,
})

export default withRouter(connect(mapStateToProps, { getCourses, getHighLights, selectCourse })(CoursePageContainer))

