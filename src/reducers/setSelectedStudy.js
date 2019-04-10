import { SET_SELECTED_STUDY } from '../actions/studies'

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_STUDY:
    console.log("PAYLOAD",payload)
      return payload
      
    default:
      return state
  }
}
