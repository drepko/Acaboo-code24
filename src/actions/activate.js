import * as request from 'superagent'
import { baseUrl } from '../constants'

export const ACTIVATION_SUCCES = 'ACTIVATION_SUCCES'
export const ACTIVATION_UNSUCCESFULL = 'ACTIVATION_UNSUCCESFULL'

const activateAccountSucces = (boolean) => ({
  type: ACTIVATION_SUCCES,
  payload: boolean
})

const activateAccountNoSucces = (boolean) => ({
    type: ACTIVATION_UNSUCCESFULL,
    payload: boolean
  })

export const verifyEmail = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/api/v0/auth/users/activate/`)
    .send(data)
    .then(() => {
      dispatch(activateAccountSucces(true))
    })
    .catch(err =>{ 
        console.error(err)
        dispatch(activateAccountNoSucces(false))
    })
}