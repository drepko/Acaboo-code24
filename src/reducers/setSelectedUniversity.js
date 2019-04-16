import { SET_SELECTED_UNIVERSITY } from '../actions/studies'

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_UNIVERSITY:
      return payload
      
    default:
      return state
  }
}
