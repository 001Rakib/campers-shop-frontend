import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/redux/features/cartSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  //for deleting product from cart
  const handleRemoveFromCart = (_id: string) => {
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
        dispatch(removeFromCart(_id));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //for dynamically disable or enable the place order button by comparing between available and ordered quantity
  const canPlaceOrder = cartProducts.every(
    (item) => item.orderedQuantity <= item.stock
  );

  //calculating total price
  const totalPrice = cartProducts.reduce(
    (acc, item) => acc + item.price * item.orderedQuantity,
    0
  );

  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionHeader
        header1=""
        header2="
            Cart"
      ></SectionHeader>
      <div>
        <Table>
          <TableCaption>List of All Cart Products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>In Stock</TableHead>
              <TableHead>Ordered Quantity</TableHead>
              <TableHead>Delete</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartProducts?.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  {" "}
                  <img className="rounded-lg" src={product.image} alt="" />{" "}
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.orderedQuantity}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleRemoveFromCart(product._id)}
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
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total Price</TableCell>
              {totalPrice ? (
                <TableCell>
                  {!canPlaceOrder ? (
                    <div>
                      <Button
                        disabled={!canPlaceOrder}
                        className="bg-blue-500 font-inter"
                      >
                        Place Order
                      </Button>
                      <p className="text-red-500 font-inter">
                        You can to order more than available quantity
                      </p>
                    </div>
                  ) : (
                    <Link to={"/checkout"}>
                      <Button className="bg-blue-500 font-inter">
                        Place Order
                      </Button>
                    </Link>
                  )}
                </TableCell>
              ) : (
                <div>
                  <p className="font-inter">
                    You have not added any product yet
                  </p>
                </div>
              )}
              <TableCell className="text-right font-medium font-inter text-lg">
                {" "}
                ${totalPrice}{" "}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
