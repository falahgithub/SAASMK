import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";


export async function GET(req:NextRequest,{ params }: { params: { movieId: string } }) {
  const movieId = params.movieId;
  
  const movies = await prisma.movie.findMany({ where: {
    id: parseInt(movieId)
  },include: { reviews: true } });
  return new Response(JSON.stringify(movies), { status: 200 });
}

export async function DELETE(req: NextRequest, { params }: { params: { movieId: string } }) {  
  const movieId = params.movieId;
  
  await prisma.movie.delete({
    where: { id: parseInt(movieId) },
  });  
  return new Response(null, { status: 200 });
}
