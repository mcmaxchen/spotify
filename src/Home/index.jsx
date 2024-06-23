import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [albums, setAlbums] = useState();
  const [artists, setArtists] = useState();

  useEffect(() => {
    fetch("/json/albums.json").then(async (res) => {
      setAlbums(await res.json());
    });

    fetch("/json/artists.json").then(async (res) => {
      setArtists(await res.json());
    });
  }, []);

  return (
    <>
      {artists && albums ? (
        <div className="flex flex-wrap gap-20">
          {albums.map((album) => {
            let artist = artists.find(
              (artist) => artist.id === album.artist_id
            );

            if (album.name.length > 25) {
              album.name = album.name.substring(0, 25) + "...";
            }

            if (artist.name.length > 25) {
              artist.name = artist.name.substring(0, 25) + "...";
            }

            return (
              <Link to={"/albums/" + album.id} key={album.id} className="p-4">
                <img src={album.cover} alt={album.name} className="w-52" />
                <h3>{album.name}</h3>
                <p>{artist.name}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </>
  );
}
