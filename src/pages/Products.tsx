/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/productCard/ProductCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { TProduct } from "@/components/topSelling/TopSelling";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Products = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useGetProductsQuery(query);
  const { register, handleSubmit } = useForm();

  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto mt-12 grid grid-cols-4 justify-between">
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-blue-100" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-blue-100" />
            <Skeleton className="h-4 w-[200px] bg-blue-100" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-blue-100" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-blue-100" />
            <Skeleton className="h-4 w-[200px] bg-blue-100" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-blue-100" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-blue-100" />
            <Skeleton className="h-4 w-[200px] bg-blue-100" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-blue-100" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-blue-100" />
            <Skeleton className="h-4 w-[200px] bg-blue-100" />
          </div>
        </div>
      </div>
    );
  }
  const handleSearch = (data: any) => {
    const searchProd = data.searchItem;
    setQuery(searchProd);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-16">
        <div className="flex items-center justify-center space-x-2">
          <form className="w-full" onChange={handleSubmit(handleSearch)}>
            {" "}
            <Input
              className="border-blue-500 font-inter"
              type="text"
              placeholder="Search Products"
              {...register("searchItem")}
            />
          </form>
          <Button
            variant={"outline"}
            className="border-blue-500 font-inter"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </Button>
        </div>

        <SectionHeader header1="All" header2="Products"></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.data.map((product: TProduct) => (
            <ProductCard
              _id={product._id}
              key={product._id}
              title={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
