import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import authReducer from './authSlice'

const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authSlice: authReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
