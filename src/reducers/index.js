// This is the root reducer, it takes all the
// reducers and combines them. Eventually
// we will have more than just an information reducer
// when we add more, it will be added to the combineReducers

import { combineReducers } from 'redux';
import InformationReducer from './information_reducer';

const rootReducer = combineReducers({
  info: InformationReducer
});

export default rootReducer;
