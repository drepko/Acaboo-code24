export const COURSE_SELECTED = 'COURSE_SELECTED'

//first step in payment course is selecting a course

    const selectedCourse = (course) => ({
        type: COURSE_SELECTED,
        payload: course
    })
    
    export const selectCourse = (data) => (dispatch) => {
        dispatch(selectedCourse(data))        
    }

