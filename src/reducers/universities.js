import { FETCH_UNIVERSITIES} from '../actions/universities'

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_UNIVERSITIES:
      return payload
      
    default:
      return state
  }
}
