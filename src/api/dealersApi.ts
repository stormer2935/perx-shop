import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dealersApi = createApi({
    reducerPath: 'dealersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test-frontend.dev.int.perx.ru/api/',
    }),
    endpoints: (builder) => ({
        getDealers: builder.query<string[], void>({
            query: () => 'dealers/',
        }),
    }),
});

export const { useGetDealersQuery } = dealersApi;