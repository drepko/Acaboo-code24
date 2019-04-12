import { SET_SELECTED_STUDY } from '../actions/studies'

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_STUDY:
      return payload
      
    default:
      return state
  }
}
