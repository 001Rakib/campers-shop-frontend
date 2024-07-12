/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/productCard/ProductCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { TProduct } from "@/components/topSelling/TopSelling";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Products = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useGetProductsQuery(query);
  const { register, handleSubmit } = useForm();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

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
  const handleSearch = (data: any) => {
    const searchProd = data.searchItem;
    setQuery(searchProd);
  };

  //for filtering by price and category
  const handleFilter = () => {
    console.log(price, category);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-16">
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

        <div className="flex items-center justify-between">
          <div>
            <form>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="submit"
                    variant={"outline"}
                    className="border-blue-500 font-inter"
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
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="">
                  {/* for filtering by price */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Filter by Price</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          onClick={handleFilter}
                          onValueChange={(value) => setPrice(value)}
                        >
                          <DropdownMenuRadioItem value="0-100">
                            0-100
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="101-150">
                            101-150
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="151">
                            150+
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  {/* for filtering by categories */}

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Filter by Categories</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                          onClick={handleFilter}
                          onValueChange={(value) => setCategory(value)}
                        >
                          <DropdownMenuRadioItem value="Tents & Shelters">
                            Tents & Shelters
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Sleeping Bags & Pads">
                            Sleeping Bags & Pads
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Backpacks & Gears">
                            Backpacks & Gear
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Camp Furniture">
                            Camp Furniture
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Cooking Gear">
                            Cooking Gear
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Hydration & Water Purification">
                            Hydration & Water Purification
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
            </form>
          </div>
          <SectionHeader header1="All" header2="Products"></SectionHeader>
          <Button variant={"outline"} className="border-blue-500 font-inter">
            Sort By Price
          </Button>
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
