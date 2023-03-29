import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './types';

const baseUrl = 'https://jsonplaceholder.typicode.com/';
const servicePoint = '/users';

export const UsersAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: servicePoint,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    getUserById: builder.query<User, string>({
      query: (path) => ({
        url: `${servicePoint}${path}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = UsersAPI;
