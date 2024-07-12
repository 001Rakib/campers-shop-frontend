import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TQueryProps = { search: string; sort: string; filterCategory: string };

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
      query: (query?: TQueryProps) => {
        if (query) {
          //filtering
          if (query.filterCategory) {
            return {
              method: "GET",
              url: `/products?category=${query.filterCategory}&searchItem=${query.search}&sort=${query.sort}`,
            };
          }
          //sorting by price and searching
          if (query) {
            return {
              method: "GET",
              url: `/products?searchItem=${query.search}&sort=${query.sort}`,
            };
          }
        }
        return {
          method: "GET",
          url: `/products`,
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
