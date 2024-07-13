import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type TCategoryCardProps = {
  image: string;
  categoryName: string;
};

const CategoryCard = ({ image, categoryName }: TCategoryCardProps) => {
  return (
    <div>
      <Link to={"/products"}>
        <Card className="font-inter">
          <CardContent className="pt-5">
            <img className="rounded-md" src={image} alt="" />
          </CardContent>
          <div>
            <CardHeader>
              <CardTitle className="text-xl"> {categoryName} </CardTitle>
            </CardHeader>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryCard;
