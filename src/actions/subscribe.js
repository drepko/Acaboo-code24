import * as request from 'superagent'
import {baseUrl} from '../constants'
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS'


    const subscribeSuccess = subscribe => ({
        type: SUBSCRIBE_SUCCESS,
        subscribe
    })
    
    export const subscribeNewsletter = (email) => (dispatch) => {
    
        request
            .post(`${baseUrl}/endpoint`)
            .send(email)
            .then(response => {
                dispatch(subscribeSuccess(response.body))
            })
            .catch(console.error)
    }