import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type TCardProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  price: number;
};

const ProductCard = ({ image, title, description, price, _id }: TCardProps) => {
  return (
    <div>
      <Card className="font-inter h-96">
        <CardContent className="pt-5">
          <img className="rounded-md" src={image} alt="" />
        </CardContent>
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle className="text-xl"> {title} </CardTitle>
            <CardDescription> {description.slice(0, 30)}... </CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
              <p>${price} </p>
              <Link to={`/products/${_id}`}>
                <Button className="mt-2 border-blue-500" variant={"outline"}>
                  Details
                </Button>
              </Link>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
