import ImageMagnifier from "@/components/imageMagnifier/ImageMagnifier";
import { TProduct } from "@/components/topSelling/TopSelling";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSingleProductsQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductsQuery(id);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto mt-12 ">
        <div className="flex flex-col space-y-3 ">
          <Skeleton className="h-[125px] w-[90vh] rounded-xl bg-blue-100" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90vh] bg-blue-100" />
            <Skeleton className="h-4 w-[90vh] bg-blue-100" />
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
    toast.success("Product Added to Cart", {
      position: "top-center",
      duration: 1000,
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto md:mt-16 p-4 md:p-0">
      <div className="flex flex-col  items-center md:flex-row gap-5 md:items-start">
        <div className="md:w-1/2">
          <ImageMagnifier image={data?.data?.image}></ImageMagnifier>
        </div>
        <div>
          <h1 className="text-4xl font-semibold font-inter">
            {data?.data?.name}{" "}
          </h1>
          <div className="flex items-center font-inter gap-2 text-slate-500 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>

            <p> {data?.data?.ratings}</p>
          </div>
          <div className="font-inter  text-slate-500 text-wrap mt-4">
            <p> {data?.data?.description} </p>
            <p className="mt-2">Category: {data?.data?.category}</p>
            <p className="mt-2">Stock: {data?.data?.stock}</p>
            <p className="mt-2 font-medium text-slate-700">
              Price: ${data?.data?.price}
            </p>
          </div>
          <div className="mt-4">
            <Button
              onClick={() => handleAddToCart(data?.data)}
              className="bg-blue-600 font-inter"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
