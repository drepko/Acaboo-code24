import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Course from './Course'

class CoursePageContainer extends PureComponent {

    // componentWillMount() {
    //     const {universityId, studyId} = this.props.params.match
    //     this.props.getCourses(universityId, studyId)
    // }

    renderCourses = (courses) => {
        return (
            courses.map((course) => {
                return <Course course={course}/>
            })
        )
    }

    render() {
        const { courses } = this.props

        if (courses === null) return <p>Loading...</p>

        return (
            <div>
                {this.renderCourses(courses)}
            </div>)
    }
}

const mapStateToProps = state => ({
    courses: state.courses === null
})


export default connect(mapStateToProps, { 
    //getCourses 
})(CoursePageContainer)

