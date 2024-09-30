import ReviewCard from "@/components/review-card";


interface Review {
  id: number;
  movieId: number;
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

const ReviewsPage = async ({params}:{params: {movieId : string}}) => {
  const movieId = params.movieId;

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${movieId}`);
  const reviews: Review[] = await data.json();


  const data2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies/${movieId}`);
  const movieData = await data2.json();
  

  return ( 
  <div>
    <h1>{movieData[0].name}</h1>
    <p>{movieData[0].averageRating}</p>
<div className="m-4 flex flex-col gap-4">
    {reviews?.map((review: Review)=>(
      <ReviewCard key={review.id} review={review.comment} reviewer={review.reviewer} rating={review.rating}/>
    ))}</div>
  </div>
   );
}
 
export default ReviewsPage;