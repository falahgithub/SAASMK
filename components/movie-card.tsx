"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {  Edit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {
 name:string;
 releaseDate: string;
 rating:string;
 id:string;
}

const MovieCard = ({name, releaseDate, rating, id}: Props) => {
  
  const handleDelete = async ()=>{
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies/${id}`,  {
      method: 'DELETE',  
      headers: {
        'Content-Type': 'application/json', 
      }});
  // const reviews = await data.json();
   
  }

  const router = useRouter();
  return ( 
    <div className="cursor-pointer">
      <Card className=" bg-violet-200">
      <CardHeader onClick={()=>{router.push(`/reviews/${id}`)}}>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{releaseDate}</CardDescription>
        <CardDescription>{rating}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <div className="flex w-full justify-end gap-3">
          <Button size="icon" onClick={()=>{}}  >
          <Edit size={20} className="hover:text-gray-700" />
          </Button>
          <Button size="icon" onClick={handleDelete}>
          <Trash size={20} className="hover:text-gray-700" />
          </Button>
          </div>
      </CardFooter>
      </Card>
      
    </div>
  );
}

export default MovieCard;