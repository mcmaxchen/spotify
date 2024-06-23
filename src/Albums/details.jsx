import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function AlbumDetails() {
  const { id } = useParams();
  const [album, setAlbum] = useState();
  const [tracks, setTracks] = useState();
  const audio = useRef(null);

  useEffect(() => {
    fetch("/json/albums.json").then(async (res) => {
      const albums = await res.json();

      setAlbum(
        albums.find((album) => {
          return album.id == id;
        })
      );
    });
  }, [id]);

  if (album) {
    return (
      <div className="p-6">
        <div className="flex flex-col items-center gap-6">
          <img src={album.cover} alt={album.name} className="w-96" />
          <h3 className="font-bold text-xl">{album.name}</h3>
          <p className="text-sm">{album.description}</p>

          {tracks?.map((track) => {
            return (
              <div className="flex flex-col items-center gap-3" key={track.id}>
                <p>{track.name}</p>

                <audio ref={audio} controls className="w-[60vw]">
                  <source src={track.mp3} />
                </audio>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>Chargement...</div>;
}
