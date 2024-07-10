import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (product) => {
        return {
          method: "POST",
          url: `/products`,
          body: product,
        };
      },
      invalidatesTags: ["product"],
    }),
    getProducts: builder.query({
      query: (searchItem) => {
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}`,
        };
      },
      providesTags: ["product"],
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useAddProductMutation,
} = baseApi;
