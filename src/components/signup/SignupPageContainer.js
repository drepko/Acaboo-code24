import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from  '../../actions/signup'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'
import ProgressBar from './layout/ProgressBar'

class SignupPage extends PureComponent {
	state = { showPassword: false, formValues: {}, terms_accept: false }

	handleSubmit = (event) => {
		event.preventDefault()
		const {username, first_name, last_name, password, phone_number, email} = this.state.formValues
		const {terms_accept} = this.state
		const data = {terms_accept, username, first_name, last_name, password, phone_number, email}
		this.props.postSignup(data)
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			formValues: {...this.state.formValues, [name]: value}
		})
	}

	handleTermsChange = () => {
		this.setState({
			terms_accept: !this.state.terms
		})
	}

	showPassword = () => {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	render() {

		return (
			<div>
				<ProgressBar  />
				<h3>Sign up</h3>
				<SignupForm handleTermsChange={this.handleTermsChange} handleChange={this.handleChange} showPassword={this.showPassword} state={this.state} handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signUp: state.signUp
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)