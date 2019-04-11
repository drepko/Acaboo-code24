import * as request from 'superagent'
import {baseUrl} from '../constants'
export const MESSAGE_SEND_SUCESS = 'MESSAGE_SEND_SUCESS'
export const MESSAGE_SEND_FAILED ='MESSAGE_SEND_FAILED'



export const sendSucess = () => ({
	type: MESSAGE_SEND_SUCESS
  })

  export const sendFailed = () => ({
	type: MESSAGE_SEND_FAILED
  })

export const sendMessage = (data) => (dispatch) =>{

	request
		.post(`${baseUrl}/message/`)
		.send(data)
		.then(() => {
			console.log("send message")
			dispatch(sendSucess())
		})
		.catch(err => {
			console.log(data)
			if (err.status === 400) {
				console.log(err)
				dispatch(sendFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})
	}