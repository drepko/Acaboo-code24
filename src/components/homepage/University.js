import React, { PureComponent } from 'react'

export default class University extends PureComponent {

    render() {
        const { university } = this.props

        return (
            <div>
                <p>{university.name}</p>
            </div>)
    }
}