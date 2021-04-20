//following reducer is for displaying the list of all students of all classes
export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case 'STUDENT_LIST_REQUEST':
      return { loading: true, students: [] }
    case 'STUDENT_LIST_SUCCESS':
      return { loading: false, students: action.payload }
    case 'STUDENT_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
