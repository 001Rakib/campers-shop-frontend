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
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { TProduct } from "../topSelling/TopSelling";
import { useAddProductMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import CategorySelector from "../categorySelector/CategorySelector";

const ProductInput = () => {
  const [category, setCategory] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data: Partial<TProduct>) => {
    try {
      const productData = {
        name: data.name,
        description: data.description,
        category: category,
        price: data.price,
        stock: data.stock,
        ratings: data.ratings,
        image: data.image,
      };
      const res = await addProduct(productData).unwrap();
      if (res.success) {
        reset();
        setDialogOpen(false);
        toast.success("Product added Successfully", {
          position: "top-center",
          duration: 2000,
        });
      }
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setDialogOpen(true)}
            className="bg-blue-500 font-inter"
          >
            Add Product
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
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
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Category
                </Label>
                <Select onValueChange={(value) => setCategory(value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <CategorySelector selectLabel="Category"></CategorySelector>
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-500 font-inter">
                Add Product
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductInput;
