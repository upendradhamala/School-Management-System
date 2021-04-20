import axios from 'axios'
import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
} from '../constants/studentConstants'

//the below uses function within a function which is privileged by redux-thunk

export const listStudents = () => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_LIST_REQUEST,
    })
    const { data } = await axios.get('/api/students')
    dispatch({
      type: STUDENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STUDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
