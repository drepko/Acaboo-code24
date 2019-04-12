import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const logout = () => ({
  type: USER_LOGOUT
})

const userLoginSuccess = (login) => ({
  type: USER_LOGIN_SUCCESS,
  payload: login
})

const userLoginFailed = (error) => ({
  type: USER_LOGIN_FAILED,
  payload: error || 'Unknown error'
})

const setCurrentUser = (user) => ({
  type: UPDATE_CURRENT_USER,
  payload: user
})

export const login = (data, history) => (dispatch) => {
  const {password, email} = data
	request
		.post(`${baseUrl}/api/v0/auth/token/login/`)
    .send({email, password})
    .then(result => {
      dispatch(userLoginSuccess(result.body))
      return result.body
    })
    .then((result) => {
      console.log(result)
      request
      .get(`${baseUrl}/api/v0/auth/me`)
      .set({Authorization: `Token ${result.auth_token}`})
      .then((result) => {
        console.log(result.body)
        dispatch(setCurrentUser(result.body))
        history.push('/')
      })
    })
    .catch(err => {
    	if (err.status === 400) {
    		dispatch(userLoginFailed(err.response.body.message))
    	}
    	else {
    		console.error(err)
    	}
    })
  }
