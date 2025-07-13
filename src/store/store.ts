import { configureStore } from '@reduxjs/toolkit';
import { goodsApi } from '../api/goodsApi';
import { dealersApi } from '../api/dealersApi';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer,
        [dealersApi.reducerPath]: dealersApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(goodsApi.middleware)
            .concat(dealersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;