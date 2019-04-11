import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/users'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import ProgressBar from '../layout/ProgressBar'
class LoginPageContainer extends PureComponent {

	state = {}
	
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.login(this.state, this.props.history)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  showPassword = () => {
	this.setState({
		showPassword: !this.state.showPassword
	})
}

	render() {
		// if (this.props.currentUser) return (
		// 	<Redirect to="/" />
		// )

		return (
			<div>
				<h1>Welcome back</h1>

				<h3>Enter your account details below</h3>

				<LoginForm showPassword={this.showPassword} state={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />

                { this.props.error && 
                <span style={{color:'red'}}>{this.props.error}</span> }
            </div>
        )
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
        error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPageContainer)
