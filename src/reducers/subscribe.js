import { SUBSCRIBE_SUCCESS } from '../actions/signup'

export default function (state = null, action = {}) {
    switch (type) {
        case SUBSCRIBE_SUCCESS:
            return { ...state, subscribes: state.subscribes.concat(action.subscribe)}
        default:
            return state
    }

}

