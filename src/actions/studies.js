import * as request from 'superagent'
import { baseUrl } from '../constants'

export const UPDATE_STUDIES = 'UPDATE_STUDIES'

const updateStudies = studies => ({
  type: UPDATE_STUDIES,
  payload: studies
})

export const getStudies = (universityId) => (dispatch) => {
  request
    .get(`${baseUrl}/api/v0/study/?institute=${universityId}`)
    .withCredentials()
    .then(result => {
      dispatch(updateStudies(JSON.parse(result.text)))
    })
    .catch(err => console.error(err))
}