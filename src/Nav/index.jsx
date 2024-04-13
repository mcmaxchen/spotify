import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex h-screen sticky top-0 bg-black">
      <ul className="flex flex-col gap-10 p-12">
        <li className="text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white">
          <Link to="/search">Search</Link>
        </li>
        <li className="text-white">
          <Link to="/artists">Artists</Link>
        </li>
        <li className="text-white">
          <Link to="/genres">Genres</Link>
        </li>
        <li className="text-white">
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
    </nav>
  );
}
