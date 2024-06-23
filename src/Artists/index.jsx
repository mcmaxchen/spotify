import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [artists, setArtists] = useState();

  useEffect(() => {
    fetch("/json/artists.json").then(async (res) => {
      setArtists(await res.json());
    });
  }, []);

  if (artists) {
    return (
      <div className="flex justify-center flex-wrap gap-20 pt-6 lg:pt-12">
        {artists.map((artist) => {
          return (
            <Link to={"/artists/" + artist.id} key={artist.id}>
              <img src={artist.photo} alt={artist.name} className="h-44 w-52" />
              {artist.name}
            </Link>
          );
        })}
      </div>
    );
  }
}
