// This is the root reducer, it takes all the
// reducers and combines them. Eventually
// we will have more than just an information reducer
// when we add more, it will be added to the combineReducers

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './reducer_auth';
import EstablishmentReducer from './establishment_reducer';
import AdvertReducer from './advert_reducer';
import ChatReducer from './chat_reducer';

const rootReducer = combineReducers({
	authenticated: AuthReducer,
	establishmentInfo: EstablishmentReducer,
	advertInfo: AdvertReducer,
	chat: ChatReducer,
	form: formReducer
});

export default rootReducer;
