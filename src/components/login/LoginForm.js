import React, { PureComponent } from 'react'
import '../../styles/Form.css'
import show from '../../images/show.png'
import hide from '../../images/hide.png'

export default class LoginForm extends PureComponent {

	render() {

		const { state, onChange, onSubmit, showPassword } = this.props

		return (
			<div>
				<form onSubmit={onSubmit}>
					<input type="username" name="username" value={
						state.username || ''
					} onChange={onChange} /> <br />

					<input className="password-field" placeholder="Password" type={state.showPassword ? "text" : "password"} name="password" value={
						state.password || ''
					} onChange={onChange} />
					<img alt="hide-show-password" onClick={showPassword} src={state.showPassword === false ? hide : show} className="password-image" />

					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}
