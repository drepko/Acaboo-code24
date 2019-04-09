import { UPDATE_STUDIES } from '../actions/studies'

export default (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_STUDIES:
      return payload
      
    default:
      return state
  }
}
