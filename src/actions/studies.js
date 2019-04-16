import * as request from 'superagent'
import { baseUrl } from '../constants'

export const UPDATE_STUDIES = 'UPDATE_STUDIES'
export const SET_SELECTED_STUDY = 'SET_SELECTED_STUDY'
export const SET_SELECTED_UNIVERSITY ='SET_SELECTED_UNIVERSITY'

const updateStudies = studies => ({
  type: UPDATE_STUDIES,
  payload: studies
})

export const setSelectedStudy = study => ({
  type: SET_SELECTED_STUDY,
  payload: study
})

export const setSelectedUniversity = university => ({
  type: SET_SELECTED_UNIVERSITY,
  payload: university
})

export const getStudies = (universityId) => (dispatch) => {
  request
    .get(`${baseUrl}/api/v0/study/?institute=${universityId}`)
    .then(result => {
      dispatch(updateStudies(JSON.parse(result.text)))
    })
    .catch(err => console.error(err))
}