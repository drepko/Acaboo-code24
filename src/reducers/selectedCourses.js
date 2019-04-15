import { COURSE_SELECTED } from '../actions/paymentFlow'
import { DELETE_COURSE } from '../actions/courses';

export default (state = [], { type, payload }) => {
    switch (type) {
      case COURSE_SELECTED:
        return [...state, payload]
      case DELETE_COURSE:
        return state.filter(course => course !== payload)
      default:
        return state
    }
  }