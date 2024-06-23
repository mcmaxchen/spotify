import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Genre() {
  const [genres, setGenres] = useState();

  useEffect(() => {
    fetch("/json/genres.json").then(async (res) => {
      setGenres(await res.json());
    });
  }, []);

  if (genres) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-20 p-16">
          {genres.map((genre) => {
            return (
              <Link
                key={genre.id}
                to={"/genres/" + genre.id}
                className="flex w-fit-content px-10 py-6 rounded-md bg-gradient-to-br from-green to-black text-white"
              >
                {genre.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return <div className=""></div>;
}
