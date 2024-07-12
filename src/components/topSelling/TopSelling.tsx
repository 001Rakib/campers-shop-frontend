import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Skeleton } from "../ui/skeleton";
import ProductCard from "../productCard/ProductCard";
import SectionHeader from "../sectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
  description: string;
  category: string;
  ratings: number;
  image: string;
  orderedQuantity: number;
};

const TopSelling = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

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
  return (
    <div className="max-w-screen-xl mx-auto mt-24">
      <SectionHeader header1="Best" header2="Selling"></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data?.data?.slice(0, 4).map((product: TProduct) => (
          <ProductCard
            key={product._id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            _id={product._id}
          ></ProductCard>
        ))}
      </div>
      <div className="text-center my-4">
        <Link to={"/products"}>
          <Button className="mt-5 bg-blue-600">View All Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
