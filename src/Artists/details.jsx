import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArtistDetails() {
  const { id } = useParams();
  const [albums, setAlbums] = useState();

  useEffect(() => {
    const fetchAlbumsNames = async () => {
      const fetchArtists = await fetch("/json/artists.json");
      const fetchAlbums = await fetch("/json/albums.json");

      const artists = await fetchArtists.json();
      const albums = await fetchAlbums.json();

      const artist = artists.find((artist) => {
        return artist.id == id;
      });

      setAlbums(
        albums.filter((album) => {
          return album.artist_id == artist.id;
        })
      );
    };
    fetchAlbumsNames();
  }, [id]);

  return (
    <div className="flex flex-wrap gap-20">
      {albums?.map((album) => (
        <Link
          to={`../albums/${album.id}`}
          key={album.id}
          className="p-4 hover:scale-110"
        >
          <div>
            <img src={album.cover} alt={album.name} className="w-52" />
          </div>
          <h3>{album.name}</h3>
        </Link>
      ))}
    </div>
  );
}
