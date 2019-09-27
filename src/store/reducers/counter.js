import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

const defaultState = {
  num: 0,
  asyncNum: 0
}

export default handleActions({
  [INCREMENT] (state, action) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state, action) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, defaultState)