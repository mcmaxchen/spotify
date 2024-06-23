import "./index.css";

import Nav from "./Nav";
import Home from "./Home";
import Albums from "./Albums";
import Search from "./Search";
import List from "./Artists";
import Genre from "./Genres";
import AlbumDetails from "./Albums/details";
import GenreDetails from "./Genres/details";
import ArtistDetails from "./Artists/details";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex">
      <Router>
        <Nav />

        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />

            <Route path="/albums" element={<Albums />} />
            <Route path="/genres" element={<Genre />} />
            <Route path="/artists" element={<List />} />

            <Route path="/albums/:id" element={<AlbumDetails />} />
            <Route path="/genres/:id" element={<GenreDetails />} />
            <Route path="/artists/:id" element={<ArtistDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
