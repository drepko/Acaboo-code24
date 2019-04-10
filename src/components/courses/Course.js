import React, { PureComponent } from 'react'
import {baseUrl} from '../../constants'

export default class Course extends PureComponent {

    signUp = (event) => {
        console.log(event.target.value)
    }

    render() {
        const { course } = this.props
        return (
            <div>
                <img alt={course.name} src={`${baseUrl}${course.image}`}/>
                <p>{course.name}</p>
                <p>{course.description}</p>
                <p>{course.price}</p>
                <button onClick={this.signUp} value={course.id}>Select this course</button>
            </div>)
    }
}