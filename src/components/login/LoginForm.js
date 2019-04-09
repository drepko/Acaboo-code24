import React, { PureComponent } from 'react'
import './LoginForm.css'

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
      <div>
  			<form onSubmit={this.handleSubmit}>
  				<label>
            Email
            <input type="email" name="email" value={
  						this.state.email || ''
  					} onChange={ this.handleChange } /> <br />
          </label>

  				<label>
						Password
						<input type="password" name="password" value={
  						this.state.password || ''
  					} onChange={ this.handleChange } /> <br />
          </label>
					
					
  				<button type="submit">Login</button>
  			</form>
			</div>
		)
	}
}
