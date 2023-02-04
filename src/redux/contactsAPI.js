import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'feedbacks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://feedback-backand.vercel.app/api',
  }),
  tagTypes: ['Feedback'],
  endpoints: builder => ({
    addContact: builder.mutation({
      query: data => ({
        url: '/feedbacks',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});

export const {
  useAddContactMutation,
} = contactsApi;