import {
  ALL_INCOME_FAIL,
  ALL_INCOME_REQUEST,
  ALL_INCOME_RESET,
  ALL_INCOME_SUCCESS,
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
