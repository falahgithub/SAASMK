import { Edit, Trash } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface ReviewCardProps{
  review: string;
  reviewer: string;
  rating: string
}
const ReviewCard = ({review, reviewer, rating}: ReviewCardProps) => {
  return ( <>
  <Card>
      <CardHeader>
        <CardTitle>{review}</CardTitle>
        <CardDescription>{reviewer}</CardDescription>
        <CardDescription>{rating}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <div className="flex w-full justify-end gap-3">
          <Edit size={20} className="hover:text-gray-700" />
          <Trash size={20} className="hover:text-gray-700" />
          </div>
      </CardFooter>
      </Card></> );
}
 
export default ReviewCard;