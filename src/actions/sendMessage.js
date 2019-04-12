import * as request from 'superagent'
import {baseUrl} from '../constants'
export const MESSAGE_SEND_SUCCESS = 'MESSAGE_SEND_SUCCESS'
export const MESSAGE_SEND_FAILED ='MESSAGE_SEND_FAILED'



export const sendSucess = () => ({
	type: MESSAGE_SEND_SUCCESS
  })

  export const sendFailed = () => ({
	type: MESSAGE_SEND_FAILED,
	payload: "Message send failed"
  })

export const sendmessage = (data) => (dispatch) =>{
	request
		.post(`${baseUrl}/api/v0/message/`)
		.send(data)
		.then(() => {
			dispatch(sendSucess())
		})
		.catch(err => {
			if (err.status === 400) {
				console.log(err)
				dispatch(sendFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})
	}