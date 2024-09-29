import prisma from '@/lib/prisma'; 
import { NextRequest } from 'next/server';

export async function GET() {
  const movies = await prisma.movie.findMany({ include: { reviews: true } });
  return new Response(JSON.stringify(movies), { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, releaseDate, averageRating, reviews } = body;

  
  if (reviews) {
  const movie = await prisma.movie.create({
    data: { name, releaseDate: new Date(releaseDate), averageRating,
      reviews: {
        create: reviews.map((review: any) => ({
          reviewer: review.reviewer || null, // optional reviewer name
          rating: review.rating,
          comment: review.comment,
        })),
      },
    },
  });
}
const movie = await prisma.movie.create({
  data: { name, releaseDate: new Date(releaseDate), averageRating},
  });

  
  return new Response(JSON.stringify(movie), { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, name, releaseDate, averageRating } = body;

  const movie = await prisma.movie.update({
    where: { id: parseInt(id) },
    data: { name, averageRating },
  });

  // releaseDate: new Date(releaseDate)
  
  return new Response(JSON.stringify(movie), { status: 200 });
}

