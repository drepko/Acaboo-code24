import React, { PureComponent } from 'react'

export default class UserDashboard extends PureComponent {

    render() {

        return (
            <div>
                <span>Welcome back {this.props.user.first_name}!</span>
            </div>
        )
    }
}
