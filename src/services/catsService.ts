import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1",
  }),
  endpoints: (builder: any) => ({
    getBreeds: builder.query({
      query: () => ({
        url: "/breeds",
      }),
    }),
  }),
});

export const { useGetBreedsQuery } = catsApi;
