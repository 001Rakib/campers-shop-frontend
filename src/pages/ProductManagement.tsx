import ProductInput from "@/components/productForm/ProductInput";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { TProduct } from "@/components/topSelling/TopSelling";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateProduct from "@/components/updateProduct/UpdateProduct";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery("");
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-blue-300 text-3xl font-semibold font-inter">
          Loading.....
        </h1>
      </div>
    );
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        if (isSuccess) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <SectionHeader header1="Product" header2="Management"></SectionHeader>
        <div className="text-center my-5">
          <ProductInput></ProductInput>
        </div>
        <Table>
          <TableCaption>List of All Added Products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Update</TableHead>
              <TableHead>Delete</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((product: TProduct) => (
              <TableRow key={product._id}>
                <TableCell>
                  {" "}
                  <img className="rounded-lg" src={product.image} alt="" />{" "}
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <UpdateProduct product={product}></UpdateProduct>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(product._id)}
                    className="border-red-500"
                    variant={"outline"}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ${product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductManagement;
