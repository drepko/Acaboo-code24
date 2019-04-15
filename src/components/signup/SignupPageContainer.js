import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from  '../../actions/signup'
import SignupForm from './SignupForm'
import ProgressBar from '../layout/ProgressBar'

class SignupPage extends PureComponent {
	state = { 
		showPassword: false, 
		formValues: {}, 
		terms_accept: false,
		errors: {

		}
	 }

	handleSubmit = async (event) => {
		event.preventDefault()
		const {first_name, last_name, password, phone_number, email} = this.state.formValues
		const {terms_accept} = this.state
		const data = {terms_accept, first_name, last_name, password, phone_number, email}
		this.fieldChecks() && this.props.signup(data, this.props.history)
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

	fieldChecks = () => {
		return true
	}

	render() {

		return (
			<div>
				<ProgressBar/>
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

export default connect(mapStateToProps, {signup})(SignupPage)