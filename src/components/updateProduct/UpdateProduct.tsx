import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TProduct } from "../topSelling/TopSelling";
import { useUpdateProductMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

type TUpdateProductProps = {
  product: TProduct;
};

const UpdateProduct = ({ product }: TUpdateProductProps) => {
  const [category, setCategory] = useState("");
  const { register, handleSubmit } = useForm();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [updateProduct] = useUpdateProductMutation();

  const onSubmit = async (data: Partial<TProduct>) => {
    try {
      const updatedProductData = {
        _id: product._id,
        name: data.name || product.name,
        description: data.description || product.description,
        category: category || product.category,
        price: data.price || product.price,
        stock: data.stock || product.stock,
        ratings: data.ratings || product.ratings,
        image: data.image || product.image,
      };

      const res = await updateProduct(updatedProductData).unwrap();
      if (res?.success) {
        setDialogOpen(false);
        toast.success("Product Updated Successfully", {
          position: "top-center",
          duration: 3000,
        });
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            onClick={() => setDialogOpen(true)}
            className="border-blue-500 font-inter"
          >
            Update Product
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Update Product</DialogTitle>
              <DialogDescription>
                Input your product details here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Product Name
                </Label>
                <Input
                  {...register("name")}
                  type="text"
                  className="col-span-3"
                  defaultValue={product.name}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Category
                </Label>
                <Select
                  defaultValue={product.category}
                  onValueChange={(value) => setCategory(value)}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Tents & Shelters">
                        Tents & Shelters
                      </SelectItem>
                      <SelectItem value="Sleeping Bags & Pads">
                        Sleeping Bags & Pads
                      </SelectItem>
                      <SelectItem value="Backpacks & Gears">
                        Backpacks & Gears
                      </SelectItem>
                      <SelectItem value="Camp Furniture">
                        Camp Furniture
                      </SelectItem>
                      <SelectItem value="Cooking Gear">Cooking Gear</SelectItem>
                      <SelectItem value="Hydration & Water Purification">
                        Hydration & Water Purification
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Description
                </Label>
                <Input
                  {...register("description")}
                  type="text"
                  className="col-span-3"
                  defaultValue={product.description}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Stock
                </Label>
                <Input
                  {...register("stock")}
                  type="number"
                  className="col-span-3"
                  defaultValue={product.stock}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Price
                </Label>
                <Input
                  {...register("price")}
                  type="number"
                  className="col-span-3"
                  defaultValue={product.price}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Ratings
                </Label>
                <Input
                  {...register("ratings")}
                  type="number"
                  className="col-span-3"
                  defaultValue={product.ratings}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Image Url
                </Label>
                <Input
                  {...register("image")}
                  type="text"
                  className="col-span-3"
                  defaultValue={product.image}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-500 font-inter">
                Update Product
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProduct;
