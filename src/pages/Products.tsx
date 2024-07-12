import CategorySelector from "@/components/categorySelector/CategorySelector";
import ProductCard from "@/components/productCard/ProductCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { TProduct } from "@/components/topSelling/TopSelling";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const { register, handleSubmit } = useForm();
  const query = {
    search: searchQuery,
    sort: sortPrice,
    filterCategory: filterCategory,
  };
  const { data, isLoading } = useGetProductsQuery(query);

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
  //for product searching
  const handleSearch = (data: FieldValues) => {
    const searchProd = data.searchItem;
    setSearchQuery(searchProd);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-16">
        {/* searching product */}
        <div className="flex items-center justify-center">
          <form className="w-full" onChange={handleSubmit(handleSearch)}>
            {" "}
            <Input
              className="border-blue-500 font-inter"
              type="text"
              placeholder="Search Products"
              {...register("searchItem")}
            />
          </form>
          <Button variant={"outline"} className="border-blue-500 font-inter">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Button>
        </div>

        {/* filtering and sorting */}
        <div className="flex items-center justify-between">
          <div>
            <Select
              defaultValue={filterCategory}
              onValueChange={(value) => setFilterCategory(value)}
            >
              <SelectTrigger className="w-[180px] border-blue-500">
                <SelectValue placeholder="Filter By Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel
                    className="cursor-pointer"
                    onClick={() => setFilterCategory("")}
                  >
                    All Product
                  </SelectLabel>
                </SelectGroup>
                <CategorySelector selectLabel="Category"></CategorySelector>
              </SelectContent>
            </Select>
          </div>

          {/* section title */}
          <SectionHeader header1="All" header2="Products"></SectionHeader>

          {/* sorting by price low to high / high to low */}
          <div>
            <Select onValueChange={(value) => setSortPrice(value)}>
              <SelectTrigger className="w-[180px] border-blue-500">
                <SelectValue placeholder="Sort By Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="__v">None</SelectItem>
                  <SelectItem value="price">Low to High</SelectItem>
                  <SelectItem value="-price">High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

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
