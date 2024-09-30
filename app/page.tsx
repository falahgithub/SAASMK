import MovieCard from "@/components/movie-card";


interface Review {
  id: number;
  movieId: number;
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  averageRating: number;
  reviews: Review[]; // Array of reviews for each movie
}


export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies`);
  const movies: Movie[] = await data.json();

  


  return (


    <div>
      <h1 className="font-light text-6xl my-10 p-10 ">The best movie reviews site!</h1>
      <div className="grid grid-cols-3 gap-10 p-10">
      {movies?.map(
        (movie: Movie)=>(<MovieCard key={movie.id} name={movie.name} releaseDate={movie.releaseDate} rating={movie.averageRating.toString()} id={movie.id.toString()} /> ))}
      </div>
    </div>
  );
}
