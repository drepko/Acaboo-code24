import React, { PureComponent } from 'react'

export default class UserDashboard extends PureComponent {

    render() {
        const {user} = this.props
        return (
            <div>
                <h1>Welcome back {this.props.user.first_name}!</h1>

                <div>
                    <h3>User details:</h3>
                    <div>First name: {user.first_name}</div>
                    <div>Last name: {user.last_name}</div>
                    <div>Phonenumber: {user.phone_number}</div>
                    <div>Email: {user.email}</div>
                </div>
            </div>
        )
    }
}
