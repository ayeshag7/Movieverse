import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card" 
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Search = ({ api_path }) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api_path, queryTerm);

  useEffect(() => {
    document.title = `Search '${queryTerm}'`
  });

  return (
    <main>
      <section className="flex justify-center items-center">
        <p className={`text-2xl text-gray-700 dark:text-white ${movies.length === 0 ? "py-48": "py-0"}`}>{ movies.length === 0 ? `No results found for '${queryTerm}'` : '' }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}