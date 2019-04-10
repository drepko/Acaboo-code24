import React, { PureComponent } from 'react'
import {baseUrl} from '../constants'
export default class Course extends PureComponent {

    render() {
        const { course } = this.props
        return (
            <div>
                <img alt={course.name} src={`${baseUrl}${course.image}`}/>
                <p>{course.name}</p>
                <p>{course.description}</p>
                <p>{course.price}</p>
            </div>)
    }
}