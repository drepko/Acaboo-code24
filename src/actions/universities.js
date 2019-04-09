import * as request from 'superagent'
export const FETCH_UNIVERSITIES = 'FETCH_UNIVERSITIES'



const loadUniversities = universities => ({
    type: FETCH_UNIVERSITIES,
    payload: universities
  })
  
  export const getUniversities = (studyId) => (dispatch) => {
    request
      .get(`${baseUrl}/api/v0/institute/`)
      .then(result => {
          console.log(result)
        dispatch(loadUniversities(result))
      })
      .catch(err => console.error(err))
  }