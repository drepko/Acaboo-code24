import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/users'
import {UPDATE_CURRENT_USER} from '../actions/signup'

export default function (state = null, {type, payload}) {
	switch (type) {
    case USER_LOGIN_SUCCESS:
        return state
    case UPDATE_CURRENT_USER:
      return {...state, credentials: payload}
    case USER_LOGOUT:
      return null

    default:
        return state
	}
}