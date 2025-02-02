import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CheckoutForm = () => {
  const [payment, setPayment] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="font-inter">
        <div className="flex justify-between gap-10">
          <div className="w-1/2">
            <Label htmlFor="name">Name</Label>
            <Input
              className="border-blue-400 mt-2"
              type="text"
              id="name"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="border-blue-400 mt-2"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="w-1/2">
            <Label htmlFor="number">Phone Number</Label>
            <Input
              className="border-blue-400 mt-2"
              type="number"
              id="phone-number"
              placeholder="Phone Number"
              {...register("number")}
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="address">Delivery Address</Label>
            <Input
              className="border-blue-400 mt-2"
              type="text"
              id="address"
              placeholder="Delivery Address"
              {...register("address")}
            />
          </div>
        </div>
        <div className="mt-5 font-inter">
          <Label className="font-inter">Payment Method</Label>
          <RadioGroup
            className="mt-4"
            onValueChange={(value) => setPayment(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" />
              <Label htmlFor="cash">Cash on Delivery</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="stripe" />
              <Label htmlFor="stripe">Stripe Payment</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="text-center">
          {payment === "cash" ? (
            <Link to={"/success"}>
              <Button type="submit" className="font-inter bg-blue-500 mt-10">
                Place Order
              </Button>
            </Link>
          ) : payment === "stripe" ? (
            <Link to={"/stripe"}>
              <Button type="submit" className="font-inter bg-blue-500 mt-10">
                Place Order
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() =>
                toast.error("Please Select a Payment Method", {
                  position: "top-center",
                  duration: 2000,
                })
              }
              type="submit"
              className="font-inter bg-blue-500 mt-10"
            >
              Place Order
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
