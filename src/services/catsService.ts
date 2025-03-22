import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CatModel } from "../../types/catModel.ts";
export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
  }),
  endpoints: (builder: any) => ({
    getBreeds: builder.query<CatModel[], void>({
      query: () => "/breeds",
    }),
  }),
});

export const { useGetBreedsQuery } = catsApi;
