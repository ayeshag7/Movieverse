import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png"

export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center items-center pt-28">
        <div className="max-w-lg">
          <img className="rounded w-60 h-60" src={PageNotFoundImage} alt="404 Page Not Found" />
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">Back to Movieverse</button>
          </Link>          
        </div>
      </section>
    </main>
  )
}