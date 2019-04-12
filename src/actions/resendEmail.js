import * as request from 'superagent'
import { baseUrl } from '../constants'

export const RESEND_EMAIL_SUCCES = 'RESEND_EMAIL_SUCCES'

const resendEmailSucces = () => ({
  type: RESEND_EMAIL_SUCCES
})

export const resendEmail = (email) => (dispatch) => {
  request
    .post(`${baseUrl}/api/v0/auth/users/resend/`)
    .send({email})
    .then(() => {
        console.log("Email resend")
      dispatch(resendEmailSucces())
    })
    .catch(err => console.error(err))
}