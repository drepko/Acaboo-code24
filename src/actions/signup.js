import * as request from 'superagent'
import {baseUrl} from '../constants'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
  })

  export const userSignupFailed = (error) => ({
	type: USER_SIGNUP_FAILED,
	payload: error || 'Unknown error'
  })

  export const signup = (data) => (dispatch) =>{

	request
		.post(`${baseUrl}/api/v0/auth/users/create/`)
		.send(data)
		.then(() => {console.log("sign up sucess full fetched result",
			dispatch(userSignupSuccess()))
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