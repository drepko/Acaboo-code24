import { UPDATE_COURSES, GET_HIGHLIGHTS } from '../actions/courses'

export default (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_COURSES:
      return payload
    case GET_HIGHLIGHTS:
    return payload      
    default:
      return state
  }
}
