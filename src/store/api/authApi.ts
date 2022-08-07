import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import customFetchBase from "../customBaseQuery";
import { RootState } from "../rootReducer";
import { ILoginForm } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: ILoginForm) => {
        return {
          url: "admin/login",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
