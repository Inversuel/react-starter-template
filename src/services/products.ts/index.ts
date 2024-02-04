import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductsType } from './products.type';

const BASEURL = import.meta.env.VITE_BASE_URL;

export const Products = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsType, string>({
      query: () => '/products'
    })
  })
});

export const { useGetAllProductsQuery } = Products;
