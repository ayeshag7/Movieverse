import { useState, useEffect } from "react";

export const useFetch = (api_path, queryTerm='') => {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api_path}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        const fetchMovies = async () => {
          const response = await fetch(url);
          const result = await response.json();
          setData(result.results);
        }
        fetchMovies();
      }, [url])

    
  return ( { data } )
}
