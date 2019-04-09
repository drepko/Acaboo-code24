import * as request from 'superagent'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
  })

  export const userSignupFailed = (error) => ({
	type: USER_SIGNUP_FAILED,
	payload: error || 'Unknown error'
  })

  export const signup = (email, password) => (dispatch) =>{
    console.log("at action of signup",email,password)

	request
		.post(`${baseUrl}/endpoint`)
		.send({ firstName: email, lastName: email, email, password })
		.then(result => {console.log("sign up sucess full fetched result",
			dispatch(userSignupSuccess()))
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})
	}