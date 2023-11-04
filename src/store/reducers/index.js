import { combineReducers } from '@reduxjs/toolkit';
import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  registration: registrationReducer,
  login: loginReducer,
});
