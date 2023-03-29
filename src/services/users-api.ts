import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Users } from './types';

const baseUrl = 'https://jsonplaceholder.typicode.com/';
const servicePoint = '/users';

export const UsersAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => ({
        url: servicePoint,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = UsersAPI;
