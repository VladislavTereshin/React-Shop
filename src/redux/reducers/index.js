import { combineReducers } from 'redux';

import filters from './filters';
import sawarmas from './sawarmas';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  sawarmas,
  cart,
});

export default rootReducer;
