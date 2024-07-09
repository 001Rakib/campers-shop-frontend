import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type TCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

const ProductCard = ({ image, title, description, price }: TCardProps) => {
  return (
    <div>
      <Card className="font-inter h-96">
        <CardContent className="pt-5">
          <img className="rounded-md" src={image} alt="" />
        </CardContent>
        <div className="flex justify-between items-center">
          <CardHeader>
            <CardTitle className="text-xl"> {title} </CardTitle>
            <CardDescription> {description.slice(0, 30)}... </CardDescription>
          </CardHeader>
          <CardFooter>
            <p>${price} </p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
