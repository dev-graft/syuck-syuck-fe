import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/rootReducer";
import { Auth } from "./Auth.interface";

// const initialState: Auth = {
//   user: localStorage.getItem("user") || "",
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   accessToken: localStorage.getItem("accessToken") || "",
// };

interface IUser {
  id: string;
  name: string;
}

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => initialState,
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
