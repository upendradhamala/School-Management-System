import {
  ALL_INCOME_FAIL,
  ALL_INCOME_REQUEST,
  ALL_INCOME_RESET,
  ALL_INCOME_SUCCESS,
  ALL_SALARY_FAIL,
  ALL_SALARY_REQUEST,
  ALL_SALARY_RESET,
  ALL_SALARY_SUCCESS,
} from '../constants/miscellaneousConstants'

export const allIncomeReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_INCOME_REQUEST:
      return { loading: true }
    case ALL_INCOME_SUCCESS:
      return { loading: false, allincome: action.payload }
    case ALL_INCOME_FAIL:
      return { loading: false, error: action.payload }
    case ALL_INCOME_RESET:
      return {}
    default:
      return state
  }
}

//
export const allSalaryReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_SALARY_REQUEST:
      return { loading: true }
    case ALL_SALARY_SUCCESS:
      return { loading: false, allsalary: action.payload }
    case ALL_SALARY_FAIL:
      return { loading: false, error: action.payload }
    case ALL_SALARY_RESET:
      return {}
    default:
      return state
  }
}
