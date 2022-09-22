import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import counters from '../features/counter/counterSlice';
import boxReducer from '../features/Box/boxSlice'
import { history } from 'utils';
// red

const rootReducer = combineReducers({
  router: connectRouter(history),
  counters,
  boxReducer
});

export default rootReducer;
