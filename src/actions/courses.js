import * as request from 'superagent'
import { baseUrl } from '../constants'

export const UPDATE_COURSES = 'UPDATE_COURSES'
export const GET_HIGHLIGHTS = 'GET_HIGHLIGHTS'

const updateCourses = courses => ({
  type: UPDATE_COURSES,
  payload: courses
})

export const getCourses = (studyId) => (dispatch) => {
  console.log(studyId, 'study id')
  request
    .get(`${baseUrl}/api/v0/course/?study=${studyId}`)
    .then(result => {
      dispatch(updateCourses(JSON.parse(result.text)))
    })
    .catch(err => console.error(err))
}

const highLightsFetched = courses => ({
  type: GET_HIGHLIGHTS,
  payload: courses
})

export const getHighLights = () =>(dispatch) => {
  request
    .get(`${baseUrl}/api/v0/course/highlights`)
    .then(result => {
      dispatch(highLightsFetched(JSON.parse(result.text)))
    })
    .catch(err => console.error(err))
}

