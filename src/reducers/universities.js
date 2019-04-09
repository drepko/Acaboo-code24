import { UPDATE_UNIVERSITIES } from '../actions/universities'

export default (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_UNIVERSITIES:
      return payload
      
    default:
      return state
  }
}
