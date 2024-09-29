import MovieCard from "@/components/movie-card";


export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies`);
  const movies = await data.json();

  


  return (


    <div>
      <h1 className="font-light text-6xl my-10 p-10 ">The best movie reviews site!</h1>
      <div className="grid grid-cols-3 gap-10 p-10">
      {movies?.map(
        (movie)=>(<MovieCard key={movie.id} name={movie.name} releaseDate={movie.releaseDate} rating={movie.averageRating} id={movie.id} /> ))}
      </div>
    </div>
  );
}
