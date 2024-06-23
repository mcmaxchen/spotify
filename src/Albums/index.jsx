import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    fetch("/json/albums.json").then(async (res) => {
      setAlbums(await res.json());
    });
  }, []);

  if (albums) {
    return (
      <div className="flex flex-wrap gap-20">
        {albums.map((album) => {
          return (
            <Link to={"/albums/" + album.id} className="p-4" key={album.id}>
              <img className="w-52" alt={album.name} src={album.cover} />

              <h3>{album.name}</h3>
            </Link>
          );
        })}
      </div>
    );
  }

  return <div>Chargement...</div>;
}

export default Albums;
