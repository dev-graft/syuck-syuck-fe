import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import customFetchBase from '../customBaseQuery';
import { RootState } from '../rootReducer';
import { ILoginForm } from './types';

interface IAuthToken {
  [token: string]: string;
}
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    getPublicKey: builder.mutation<{ token: string }, ILoginForm>({
      query: (body: ILoginForm) => {
        return {
          url: 'admin/login',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { usePublicKey } = authApi;

