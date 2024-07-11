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
const Cart = () => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (_id: string) => {
    dispatch(removeFromCart(_id));
  };

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
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell>
                {cartProducts.map((item) => {
                  if (item.orderedQuantity > item.stock) {
                    return (
                      <div key={item._id}>
                        <Button disabled className="bg-blue-500 font-inter">
                          Place Order
                        </Button>

                        <p className=" text-red-500">
                          You can not order more than available quantity
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <div key={item._id}>
                        <Button className="bg-blue-500 font-inter">
                          Place Order
                        </Button>
                      </div>
                    );
                  }
                })}
              </TableCell>
              <TableCell className="text-right"> 0000</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
