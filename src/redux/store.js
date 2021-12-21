import { configureStore } from '@reduxjs/toolkit';
// import { phoneBookReducer } from './phoneBook';
import { phoneBookApi } from './phoneBook/phoneBook';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phoneBookApi.middleware,
  ],
});

// eslint-disable-next-line import/no-anonymous-default-export

setupListeners(store.dispatch);
