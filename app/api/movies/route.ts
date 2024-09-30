import prisma from '@/lib/prisma'; 
import { NextRequest } from 'next/server';

interface Review{
  reviewer: string;
  rating: string;
  comment: string;
}

export async function GET() {
  const movies = await prisma.movie.findMany({ include: { reviews: true } });
  return new Response(JSON.stringify(movies), { status: 200 });
}



export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, releaseDate, averageRating, reviews } = body;

  let movie;
  if (reviews) {
  movie = await prisma.movie.create({
    data: { name, releaseDate: new Date(releaseDate), averageRating,
      reviews: {
        create: reviews.map((review: Review) => ({
          reviewer: review.reviewer || null, // optional reviewer name
          rating: review.rating,
          comment: review.comment,
        })),
      },
    },
  });
}
  movie = await prisma.movie.create({
  data: { name, releaseDate: new Date(releaseDate), averageRating},
  });

  
  return new Response(JSON.stringify(movie), { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, name, averageRating } = body;

  const movie = await prisma.movie.update({
    where: { id: parseInt(id) },
    data: { name, averageRating },
  });

  // releaseDate: new Date(releaseDate)
  
  return new Response(JSON.stringify(movie), { status: 200 });
}

