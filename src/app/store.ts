import { configureStore } from "@reduxjs/toolkit";
import investsSlice from "./slices/investsSlice";

// ...

export const store = configureStore({
  reducer: {
    invests: investsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
