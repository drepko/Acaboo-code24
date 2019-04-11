import {
	MESSAGE_SEND_FAILED, MESSAGE_SEND_SUCCESS
} from '../actions/sendMessage'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case MESSAGE_SEND_SUCCESS:
    console.log("MESSAGE SENT SUCEESFULLY")
      return {
        success: true
      }

    case MESSAGE_SEND_FAILED:
    console.log("MESSAGE SENT FAILED")

      return {
        error: payload
      }

		default:
      return state
    }

}