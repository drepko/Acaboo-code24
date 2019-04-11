import { ACTIVATION_SUCCES } from '../actions/activate'
import {ACTIVATION_UNSUCCESFULL} from '../actions/activate'

export default function (state = false, { type, payload }) {
    switch (type) {
        case ACTIVATION_SUCCES:
            return payload
        case ACTIVATION_UNSUCCESFULL:
            return payload

        default:
            return state
    }
}
