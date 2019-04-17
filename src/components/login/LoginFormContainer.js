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

	state = { showPassword: false, canSubmit: true, formValues: {}, validated: false, submitting: false }

	disableButton() {
		this.setState({ canSubmit: false });
	}

	enableButton() {
		this.setState({ canSubmit: true });
	}

	handleChange = (event) => {

		const { name, value } = event.target

		this.setState({
			formValues: { ...this.state.formValues, [name]: value }
		})
	}

	handleSubmit(event) {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			const { password, email } = this.state.formValues
			const data = { password, email }
			this.setState({ submitting: true })
			this.props.login(data, this.props.history)
		}
		this.setState({ validated: true });
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

				<LoginForm 
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				showPasswordFunc={this.showPassword}
				state={this.state}
				/>
	
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
