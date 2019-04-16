import { UPDATE_COURSES, GET_HIGHLIGHTS } from '../actions/courses'

export default (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_COURSES:
      return payload.map(course => ({
        description: course.description,
        id: course.id,
        image: course.image,
        name: course.name,
        price: course.price ? course.price/100 : null,
        provided: course.provided
        })
      )
    case GET_HIGHLIGHTS:
      return payload
    default:
      return state
  }
}