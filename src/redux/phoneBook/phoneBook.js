import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61c0802433f24c001782345e.mockapi.io/contact/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchPhones: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchPhonesQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = phoneBookApi;
