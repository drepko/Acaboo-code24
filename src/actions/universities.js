import * as request from 'superagent'
import { baseUrl } from '../constants'

export const UPDATE_UNIVERSITIES = 'UPDATE_UNIVERSITIES'

const updateUniversities = universities => ({
  type: UPDATE_UNIVERSITIES,
  payload: universities
})

export const getUniversities = () => (dispatch) => {
  request
    .get(`${baseUrl}/api/v0/institute/`)
    .then(result => {
      dispatch(updateUniversities(JSON.parse(result.text)))
    })
    .catch(err => console.error(err))
}