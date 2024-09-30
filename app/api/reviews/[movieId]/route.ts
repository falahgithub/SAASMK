import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; 



// GET: Fetch all reviews for a specific movie
export async function GET(req: NextRequest, { params }: { params: { movieId: string } }) {
  const movieId = params.movieId;

  if (!movieId) {
    return NextResponse.json({ error: 'Movie ID is required' }, { status: 400 });
  }
  const reviews = await prisma.review.findMany({
    where: { movieId: parseInt(movieId) },
  });
  return NextResponse.json(reviews, { status: 200 });
}



export async function POST(req: NextRequest, { params }: { params: { movieId: string } }) {
  const body = await req.json();
  const movieId = params.movieId;

  const { reviewer, rating, comment } = body;

  if (!movieId || !rating || !comment) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if(movieId){
  await prisma.review.create({
    data: {
      movieId: parseInt(movieId),
      reviewer: reviewer || null,
      rating: parseFloat(rating),
      comment,
    },
  });
}


  return NextResponse.json(null, { status: 201 });

}

// export async function PUT(req: NextRequest,  { params }: { params: { movieId: string } }) {
//   const movieId = params.movieId;
//   const body = await req.json();
//   const {reviewer, rating, comment } = body;

//   const reviews = await prisma.review.findMany({
//     where: { movieId: parseInt(movieId) },
//   });
  
//   const averageRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
//   const review = await prisma.movie.update({
//     where: { id: parseInt(movieId) },
//     data: { averageRating },
//   });

//   return NextResponse.json(review, { status: 201 });
// }

// DELETE: Delete a review by its ID
export async function DELETE(req: NextRequest, { params }: { params: { movieId: string } }) {
  const id = params.movieId;

  if (!id) {
    return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
  }

  await prisma.review.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json({ message: 'Review deleted successfully' }, { status: 200});
}
