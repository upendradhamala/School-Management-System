import {
  ALL_INCOME_FAIL,
  ALL_INCOME_REQUEST,
  ALL_INCOME_SUCCESS,
  ALL_SALARY_FAIL,
  ALL_SALARY_REQUEST,
  ALL_SALARY_SUCCESS,
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

// salary
export const particularMonthYearSalary = (year, month) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_SALARY_REQUEST,
    })
    const { data } = await axios.get(`/api/teachers/allsalary/${year}/${month}`)
    dispatch({
      type: ALL_SALARY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_SALARY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const particularYearSalary = (year) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_SALARY_REQUEST,
    })
    const { data } = await axios.get(`/api/teachers/allsalary/${year}`)
    dispatch({
      type: ALL_SALARY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_SALARY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const alltillNowSalary = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_SALARY_REQUEST,
    })
    const { data } = await axios.get(`/api/teachers/allsalaries`)
    console.log("data is",data)
    dispatch({
      type: ALL_SALARY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_SALARY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
