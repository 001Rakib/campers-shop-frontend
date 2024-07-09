import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (searchItem) => {
        console.log(searchItem);
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}`,
        };
      },
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductsQuery } = baseApi;
