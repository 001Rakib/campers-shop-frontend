import ProductCard from "@/components/productCard/ProductCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { TProduct } from "@/components/topSelling/TopSelling";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/redux/api/baseApi";

const Products = () => {
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
    <div>
      <div className="max-w-screen-xl mx-auto mt-24">
        <SectionHeader header1="All" header2="Products"></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.data.map((product: TProduct) => (
            <ProductCard
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
