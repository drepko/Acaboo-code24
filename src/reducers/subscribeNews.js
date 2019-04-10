import { SUBSCRIBE_NEWSLETTER_SUCCESS } from '../actions/subscribe'

export default function (state = null, action = {}) {
    switch (action) {
        case SUBSCRIBE_NEWSLETTER_SUCCESS:
            return [action.subscribe, ...state]
        default:
            return state
    }

}



