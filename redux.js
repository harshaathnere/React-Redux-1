import redux from 'redux'
import {createStore} from 'redux'
const store = createStore( (state={count: 0}) => {
  return state
});
export default store