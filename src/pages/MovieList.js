import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card" 
import { useEffect } from "react";

export const MovieList = ({ api_path, title }) => {

  const { data: movies } = useFetch(api_path);

  useEffect(() => {
    document.title = `${title}`
  });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
