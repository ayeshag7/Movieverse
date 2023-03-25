import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.png";


export const MovieDetail = () => {

  const params = useParams();

  const [movieData, setMovieData] = useState({});

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=976048cc89d01c65bb74d19aed2bc171&language=en-US`

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setMovieData(json);
    }
    fetchMovieData();
  }, [url])

  useEffect(() => {
    document.title = `${movieData.original_title}`
  });


  const {poster_path, original_title, overview, genres, runtime, budget, revenue, release_date, imdb_id, vote_average, vote_count} = movieData;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backup;

  const text = ["Runtime:", "Budget:", "Revenue:", "Release Date:", "IMDB Code:"];
  const content = [runtime, budget, revenue, release_date, imdb_id];

  return (
    <main>
      <section className="flex justify-around flex-wrap py-8">
        <div className="max-w-sm">
          <img src={image} alt={`${original_title} poster`} className="rounded" />
        </div>
        <div className="max-w-2xl text-gray-800 text-lg dark:text-white">
          <h1 className="text-5xl font-bold my-4 text-center lg:text-left">{original_title}</h1>
          <p className="my-4 text-center lg:text-left">{overview}</p>
          <p className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
            { genres && genres.map((genre) => (
              <span className="p-2 border rounded border-gray-200 dark:border-gray-600">{genre.name}</span>
            )) }
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-12 my-8 text-xl">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill text-yellow-400" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p>{vote_average}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left-fill text-red-600" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                </svg>
                <p>{vote_count}</p>
              </div>
          </div>
          { content && content.map((pContent, index) => (
            <p className="flex flex-wrap gap-2 justify-center lg:justify-start my-4">
              <span className="text-xl font-bold">{text[index]}</span>
              <span className="text-lg">{pContent}</span>
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}
