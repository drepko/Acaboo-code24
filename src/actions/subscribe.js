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
    

    const subscribeCourseSuccess = ()=> ({
        type: SUBSCRIBE_COURSE_SUCCES
    })

    export const subscribeCourse = (data, id) => (dispatch) => {
    console.log(data,'email')
        request
            .post(`${baseUrl}/api/v0/course/${id}/subscribe`)
            .send({email: data})
            .then(() => {
                dispatch(subscribeCourseSuccess())
            })
            .catch(console.error)
    }
