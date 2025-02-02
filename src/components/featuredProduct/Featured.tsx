import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Skeleton } from "../ui/skeleton";
import SectionHeader from "../sectionHeader/SectionHeader";
import { TProduct } from "../topSelling/TopSelling";
import ProductCard from "../productCard/ProductCard";

const Featured = () => {
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
      <SectionHeader header1="Featured" header2="Product"></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-4 lg:px-0 gap-4">
        {data?.data?.slice(3, 7).map((product: TProduct) => (
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
    </div>
  );
};

export default Featured;
