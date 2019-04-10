import React, { PureComponent } from 'react'
import './SignUpForm.css'
import show from '../../images/show.png'
import hide from '../../images/hide.png'

export default class SignupForm extends PureComponent {

	render() {
		const { handleSubmit, handleChange, state, showPassword, handleTermsChange } = this.props

		return (
			<div className="signup-form">
				<form onSubmit={handleSubmit}>

				<input placeholder="Username" type="text" name="username" value={
						state.formValues.username || ''
					} onChange={handleChange} />

					<input placeholder="First Name" type="text" name="first_name" value={
						state.formValues.first_name || ''
					} onChange={handleChange} />

					<input placeholder="Last Name" type="text" name="last_name" value={
						state.formValues.last_name || ''
					} onChange={handleChange} />

					<input placeholder="Telephone" type="text" name="phone_number" value={
						state.formValues.phone_number || ''
					} onChange={handleChange} />

					<input placeholder="Email" type="email" name="email" value={
						state.formValues.email || ''
					} onChange={handleChange} />

					<input className="password-field" placeholder="Password" type={state.showPassword ? "text" : "password"} name="password" value={
						state.formValues.password || ''
					} onChange={handleChange} />
					<img alt="hide-show-password" onClick={showPassword} src={state.showPassword === false ? hide : show} className="password-image" />

					<input className="password-field" placeholder="Confirm Password" type={state.showPassword ? "text" : "password"} name="confirmPassword" value={
						state.formValues.confirmPassword || ''
					} onChange={handleChange} />
					<img alt="hide-show-password" onClick={showPassword} src={state.showPassword === false ? hide : show} className="password-image" />

					{
						state.formValues.password &&
						state.formValues.confirmPassword &&
						state.formValues.password !== state.formValues.confirmPassword &&
						<p style={{ color: 'red' }}>The passwords do not match!</p>
					}
					<label>
						Terms:
          					<input
							name="terms_accept"
							type="checkbox"
							checked={state.terms_accept}
							onChange={handleTermsChange} />
					</label>
					<button type="submit">Sign up</button>
				</form>
			</div>
		)
	}
}