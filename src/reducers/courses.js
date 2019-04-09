import { UPDATE_COURSES } from '../actions/courses'

export default (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_COURSES:
      return payload
      
    default:
      return state
  }
}
