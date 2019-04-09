import * as request from 'superagent'
import {baseUrl} from '../constants'
export const FETCH_UNIVERSITIES = 'FETCH_UNIVERSITIES'



const loadUniversities = universities => ({
    type: FETCH_UNIVERSITIES,
    payload: universities
  })
  
  export const getUniversities = (studyId) => (dispatch) => {
      console.log("at action" )
    request
      .get(`${baseUrl}/docs//api/v0/institute/`)
      .then(result => {
          console.log("RESULT",result)
        dispatch(loadUniversities(result))
      })
      .catch(err => console.error(err))
  }

