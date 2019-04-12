import * as request from 'superagent'
import {baseUrl} from '../constants'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const UPDATE_SIGN_UP_DETAILS = 'UPDATE_SIGN_UP_DETAILS'

export const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
  })

  export const userSignupFailed = () => ({
	type: USER_SIGNUP_FAILED
	})
	
	export const updateUserDetails = (data) => ({
		type: UPDATE_SIGN_UP_DETAILS,
		payload: data
	})

  export const signup = (data, history) => (dispatch) =>{

	request
		.post(`${baseUrl}/api/v0/auth/users/create/`)
		.send(data)
		.then(() => {
			dispatch(userSignupSuccess())
			dispatch(updateUserDetails(data))
			history.push("/checkemail")
		})
		.catch(err => {
			if (err.status === 400) {
				console.log(err)
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})
	}