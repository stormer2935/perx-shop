import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Good } from '../types/types';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test-frontend.dev.int.perx.ru/api/',
    }),
    endpoints: (builder) => ({
        getGoods: builder.query<Good[], string[] | undefined>({
            query: (dealers) => {
                if (dealers && dealers.length > 0) {
                    return `goods/?dealers=${dealers.join(',')}`;
                }
                return 'goods/';
            },
        }),
    }),
});

export const { useGetGoodsQuery } = goodsApi;