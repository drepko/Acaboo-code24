import * as request from 'superagent'
import {baseUrl} from '../constants'
export const SUBSCRIBE_NEWSLETTER_SUCCESS = 'SUBSCRIBE_NEWSLETTER_SUCCESS'
export const SUBSCRIBE_COURSE_SUCCES = 'SUBSCRIBE_COURSE_SUCCES'

    const subscribeNewsSucces = () => ({
        type: SUBSCRIBE_NEWSLETTER_SUCCESS
 
    })
    
    export const subscribeNews = (data) => (dispatch) => {
        request
            .post(`${baseUrl}/api/v0/mailinglist/subscription/`)
            .send({email: data})
            .then(() => {
                dispatch(subscribeNewsSucces())
            })
            .catch(console.error)
    }
    

    const subscribeCourseSuccess = ()=> ({
        type: SUBSCRIBE_COURSE_SUCCES
    })

    export const subscribeCourse = (data, id) => (dispatch) => {
        request
            .post(`${baseUrl}/api/v0/course/${id}/subscribe`)
            .send({email: data})
            .then(() => {
                dispatch(subscribeCourseSuccess())
            })
            .catch(console.error)
    }
