import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IPublicKey {
    value: string
}

const initialState: IPublicKey = {
  value: ''
}

export const authSlice = createSlice({
  name:'code',
  initialState,
  reducers: {
    getPublicKey: ( state, action:PayloadAction<string> ) => {
      state.value = action.payload
    }
  }
})

export const {getPublicKey}  = authSlice.actions
export default authSlice.reducer