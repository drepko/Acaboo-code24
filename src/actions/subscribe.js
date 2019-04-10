import * as request from 'superagent'
import {baseUrl} from '../constants'
export const SUBSCRIBE_NEWSLETTER_SUCCESS = 'SUBSCRIBE_NEWSLETTER_SUCCESS'
export const SUBSCRIBE_COURSE_SUCCES = 'SUBSCRIBE_COURSE_SUCCES'

    const subscribeNewsSucces = subscribe => ({
        type: SUBSCRIBE_NEWSLETTER_SUCCESS,
        subscribe
    })
    
    export const subscribeNews = (email) => (dispatch) => {
    
        request
            .post(`${baseUrl}/subscribes`)
            .send(email)
            .then(response => {
                dispatch(subscribeNewsSucces(response.body))
            })
            .catch(console.error)
    }
    

    const subscribeCourseSuccess = subscribe => ({
        type: SUBSCRIBE_COURSE_SUCCES,
        subscribe
    })

    export const subscribeCourse = (data) => (dispatch) => {
    
        request
            .post(`${baseUrl}/course/${data.study}/subscribe`)
            .send(data)
            .then(response => {
                dispatch(subscribeCourseSuccess(response.body))
            })
            .catch(console.error)
    }