  
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import UserDashboard from './UserDashboard'

class UserDashboardContainer extends PureComponent {

    render() {
       
        return (
           <UserDashboard user={this.props.userCredentials}/>
        )
    }
}

const mapStateToProps = function (state) {
	return {
        userCredentials: state.currentUser.credentials && state.currentUser.credentials,
        userToken: state.currentUser.auth_token
	}
}

export default connect(mapStateToProps)(UserDashboardContainer)