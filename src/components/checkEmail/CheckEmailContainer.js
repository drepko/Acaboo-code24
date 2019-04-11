import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { resendEmail } from '../../actions/resendEmail'
import ProgressBar from '../layout/ProgressBar'
import Checkemail from './CheckEmail'

class CheckEmailContainer extends PureComponent {

    resendEmail = () => {
        const {email} = this.props.currentUser.credentials
        console.log(email)
        this.props.resendEmail(email)
    }

	render() {
        const {credentials} = this.props.currentUser
		return (
			<div>
                <ProgressBar />
                <Checkemail onClick={this.resendEmail} credentials={credentials}/>
            </div>
        )
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {resendEmail})(CheckEmailContainer)
