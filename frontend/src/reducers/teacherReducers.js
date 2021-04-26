import {
    TEACHER_REGISTER_FAIL,
    TEACHER_REGISTER_REQUEST,
    TEACHER_REGISTER_RESET,
    TEACHER_REGISTER_SUCCESS,
  TEACHER_SALARY_FAIL,
  TEACHER_SALARY_REQUEST,
  TEACHER_SALARY_RESET,
  TEACHER_SALARY_SUCCESS,
} from '../constants/teacherConstants'

export const teacherSalaryReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_SALARY_REQUEST:
      return { loading: true }
    case TEACHER_SALARY_SUCCESS:
      return { loading: false, success: action.payload }
    case TEACHER_SALARY_FAIL:
      return { loading: false, error: action.payload }
    case TEACHER_SALARY_RESET:
      return {}
    default:
      return state
  }
}


//TEACHER REGISTER REDUCER
export const teacherRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case TEACHER_REGISTER_REQUEST:
        return { loading: true }
      case TEACHER_REGISTER_SUCCESS:
        return { loading: false, success: action.payload }
      case TEACHER_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      case TEACHER_REGISTER_RESET:
        return {}
      default:
        return state
    }
  }