import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/users'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'

class TestFormContainer extends PureComponent {
	constructor(props) {
		super(props);
		this.disableButton = this.disableButton.bind(this);
		this.enableButton = this.enableButton.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	disableButton() {
		this.setState({ canSubmit: false });
	}

	enableButton() {
		this.setState({ canSubmit: true });
	}

	state = { showPassword: false, canSubmit: true }

	handleSubmit = (data) => {
		this.props.login(data, this.props.history)
	}

	showPassword = () => {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	render() {

		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Welcome back</h1>

				<h3>Enter your account details below</h3>

				<LoginForm showPassword={this.showPassword} state={this.state} onSubmit={this.handleSubmit} />
	
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, { login })(TestFormContainer)
