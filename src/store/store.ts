import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.ts";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { catsApi } from "../services/catsService.ts";

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer as any,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
