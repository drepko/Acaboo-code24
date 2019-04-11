import {
	MESSAGE_SEND_FAILED, MESSAGE_SEND_SUCESS
} from '../actions/sendMessage'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case MESSAGE_SEND_SUCESS:
    console.log("signup sucess", payload)
      return {
        success: true
      }

    case MESSAGE_SEND_FAILED:
      return {
        error: payload
      }

		default:
      return state
    }

}