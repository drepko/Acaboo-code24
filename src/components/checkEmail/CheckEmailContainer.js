import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { resendEmail } from '../../actions/resendEmail'
import ProgressBar from '../layout/ProgressBar'
import Checkemail from './CheckEmail'

class CheckEmailContainer extends PureComponent {

    resendEmail = () => {
        const {email} = this.props.credentials
        this.props.resendEmail(email)
    }

	render() {
        const {credentials} = this.props
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
		credentials: state.signUpDetails
	}
}

export default connect(mapStateToProps, {resendEmail})(CheckEmailContainer)
