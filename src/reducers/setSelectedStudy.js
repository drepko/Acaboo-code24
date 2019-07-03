import { SET_SELECTED_STUDY, CLEAR_SELECTED_STUDY } from '../actions/studies'

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_STUDY:
      return payload
      case CLEAR_SELECTED_STUDY:
      return null   
    default:
      return state
  }
}
