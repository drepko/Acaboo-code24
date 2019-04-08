import * as request from 'superagent'
import { baseUrl } from '../constants'

export const UPDATE_COURSES = 'UPDATE_COURSES'

const updateCourses = courses => ({
  type: UPDATE_COURSES,
  payload: courses
})

export const getCourses = (studyId) => (dispatch) => {
  request
    .get(`${baseUrl}/api/v0/course/`)
    .then(result => {
        console.log(result)
      dispatch(updateCourses(result))
    })
    .catch(err => console.error(err))
}