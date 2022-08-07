import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';

const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
