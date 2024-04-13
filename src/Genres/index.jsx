import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Genre() {
  const [genres, setGenre] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchGenreNames = async () => {
      const url = await fetch("http://localhost:8000/genres");
      const genre = await url.json();
      setGenre(genre);
      setLoad(true);
    };

    fetchGenreNames();
  }, []);

  return (
    <>
      {load ? (
        <div className="flex gap-20">
          {genres.map((genre) => (
            <div key={genre.id}>
              <Link to={`/genres/${genre.id}`}>
                <h3>{genre.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h3>Chargement...</h3>
      )}
    </>
  );
}
