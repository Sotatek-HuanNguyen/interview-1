import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import counters from '../features/counter/counterSlice';
import { history } from 'utils';
// red

const rootReducer = combineReducers({
  router: connectRouter(history),
  counters
});

export default rootReducer;
