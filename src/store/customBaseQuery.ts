import { RootState } from './rootReducer';
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  fakeBaseQuery,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
// import { logout } from '../features/auth';

console.log(process.env.NODE_ENV);

const baseUrl: string | undefined =
  process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_BASEURL : process.env.REACT_APP_PROD_BASEURL;

console.log('production? ', process.env.NODE_ENV === 'production');
console.log('url = ', baseUrl);

if (baseUrl === undefined) alert('baseUrl확인');
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({ baseUrl: `${baseUrl}/portal/api/` });

export const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
        if (refreshResult.data) {
          // api.dispatch(tokenReceived(refreshResult.data));
          result = await baseQuery(args, api, extraOptions);
        } else {
          // api.dispatch(logout());
          window.location.href = '/login';
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default customFetchBase;

