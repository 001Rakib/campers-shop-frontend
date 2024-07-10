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
import { useGetProductsQuery } from "@/redux/api/baseApi";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery("");

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-blue-300 text-3xl font-semibold font-inter">
          Loading.....
        </h1>
      </div>
    );
  }

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
                  {" "}
                  <Button className="border-blue-500" variant={"outline"}>
                    Update
                  </Button>{" "}
                </TableCell>
                <TableCell>
                  <Button className="border-red-500" variant={"outline"}>
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
