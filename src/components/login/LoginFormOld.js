import React, { PureComponent } from 'react'
import '../../styles/Form.css'
import show from '../../images/password/show.png'
import hide from '../../images/password/hide.png'

export default class LoginForm extends PureComponent {

	render() {

		const { state, onChange, onSubmit, showPassword } = this.props

		return (
			<div className="main-column">
				<div className="flex-column jc-between">
					<form onSubmit={onSubmit}>
						<input placeholder="Email" type="email" name="email" value={
							state.email || ''
						} onChange={onChange} /> <br />

						<input className="password-field" placeholder="Password" type={state.showPassword ? "text" : "password"} name="password" value={
							state.password || ''
						} onChange={onChange} />

						<img alt="hide-show-password" onClick={showPassword} src={state.showPassword === false ? hide : show} className="password-image image-xsmall" />
						<div>
							<button className="btn-blue-med right" type="submit">Login</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
