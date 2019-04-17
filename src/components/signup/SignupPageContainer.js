import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/signup'
import './SignUpForm.css'
import SignupForm from './SignupForm';
import passwordValidator from 'password-validator'
import { commonPassword } from '../../constants'

class FormExample extends Component {
	constructor(...args) {
		super(...args);

		this.handleChange = this.handleChange.bind(this);
		this.handleTermsChange = this.handleTermsChange.bind(this);
		this.showPassword = this.showPassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			validated: false,
			showPassword: false,
			formValues: {},
			terms_accept: false,
			submitting: false,
			passwordErrors: []
		};
	}

	isValidPassword = () => {
		const schema = new passwordValidator();
		schema
			.is().min(10)
			.is().max(100)
			.has().uppercase()
			.has().lowercase()
			.has().symbols()
			.has().digits()
			.has().not().spaces()
			.is().not().oneOf(commonPassword);
		return schema.validate(this.state.formValues.password)
	}

	storePasswordErrors = () => {
		const schema = new passwordValidator();
		schema
			.is().min(10)
			.is().max(100)
			.has().uppercase()
			.has().lowercase()
			.has().symbols()
			.has().digits()
			.has().not().spaces()
			.is().not().oneOf(commonPassword);
		const errors = schema.validate(this.state.formValues.password, { list: true })
		let errorArray = []
		errorArray = errors.reduce((array, currentError) => {
			switch (currentError) {
				case "min":
					return [...array, "Your password is too short. (min 10 characters)"]
				case "max":
					return [...array, "Your password is too long. (max 100 characters)"]
				case "digits":
					return [...array, "A password needs to contain atleast 1 number."]
				case "uppercase":
					return [...array, "A password needs to contain atleast 1 uppercase letter."]
				case "lowercase":
					return [...array, "A password needs to contain atleast 1 lowercase letter."]
				case "symbols":
					return [...array, "A password needs to contain atleast 1 symbol."]
				case "oneOf":
					return [...array, "Your password can't be one of the 1000 most common passwords."]
				case "spaces":
					return [...array, "Your password can't contain spaces."]
				default:
					break;
			}
		}, [])
		return errorArray
	}

	handleChange = (event) => {

		const { name, value } = event.target

		this.setState({
			formValues: { ...this.state.formValues, [name]: value }
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

	handleSubmit(event) {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			const { first_name, last_name, password, phone_number, email } = this.state.formValues
			const { terms_accept } = this.state
			const data = { terms_accept, first_name, last_name, password, phone_number, email }
			this.setState({ submitting: true })
			this.props.signup(data, this.props.history)
		}
		this.setState({ validated: true });
	}

	render() {

		return (
			<SignupForm
				handleChange={this.handleChange}
				handleTermsChange={this.handleTermsChange}
				handleSubmit={this.handleSubmit}
				showPasswordFunc={this.showPassword}
				state={this.state}
				isValidPassword={this.isValidPassword}
				storePasswordErrors={this.storePasswordErrors}
			/>
		);
	}
}

const mapStateToProps = function (state) {
	return {
		signUp: state.signUp
	}
}

export default connect(mapStateToProps, { signup })(FormExample)