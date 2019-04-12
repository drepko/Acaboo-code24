import { UPDATE_SIGN_UP_DETAILS } from '../actions/signup'

export default function (state = null, { type, payload }) {
  switch (type) {

    case UPDATE_SIGN_UP_DETAILS:
      return payload

    default:
      return state
  }

}