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
      query: (query: { search: string; sort: string }) => {
        if (query.sort) {
          return {
            method: "GET",
            url: `/products?sort=${query.sort}`,
          };
        }

        return {
          method: "GET",
          url: `/products?searchItem=${query.search}`,
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
    updateProduct: builder.mutation({
      query: (product) => ({
        method: "PATCH",
        url: `/products/${product._id}`,
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/products/${id}`,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = baseApi;
