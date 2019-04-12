import {
	MESSAGE_SEND_FAILED, MESSAGE_SEND_SUCCESS
} from '../actions/sendMessage'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case MESSAGE_SEND_SUCCESS:
      return {
        success: "Message sent sucessfully"
      }

    case MESSAGE_SEND_FAILED:

      return {
        error: payload
      }

		default:
      return state
    }

}