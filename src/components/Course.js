import React, { PureComponent } from 'react'

export default class Course extends PureComponent {

    render() {
        const { course } = this.props

        return (
            <div>
                <p>{course.name}</p>
            </div>)
    }
}