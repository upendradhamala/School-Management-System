import {
  ALL_INCOME_FAIL,
  ALL_INCOME_REQUEST,
  ALL_INCOME_SUCCESS,
} from '../constants/miscellaneousConstants'
import axios from 'axios'
export const particularMonthYear = (year, month) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_INCOME_REQUEST,
    })
    const { data } = await axios.get(`/api/teachers/allincome/${year}/${month}`)
    dispatch({
      type: ALL_INCOME_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_INCOME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const particularYear = (year, month) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_INCOME_REQUEST,
    })
    const { data } = await axios.get(`/api/teachers/allincome/${year}`)
    dispatch({
      type: ALL_INCOME_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_INCOME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const alltillNow = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_INCOME_REQUEST,
    })
    const { data } = await axios.get(`/api/teachers/allincome`)
    dispatch({
      type: ALL_INCOME_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_INCOME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
