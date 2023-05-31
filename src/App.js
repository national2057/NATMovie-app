import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import NotFound from "./pages/NotFound";
import RootLayOut from "./pages/RootLayOut";
import MovieCategory from "./pages/MovieCategory";
import MovieDetail from "./pages/MovieDetail";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<RootLayOut />} />
        <Route index element={<Home />} />
        <Route path="movie/:category" element={<MovieCategory />} />
        <Route path="movie/:category/:page" element={<MoviePage />} />
        <Route path="movie/:search/:search" element={<SearchPage />} />
        <Route path="movie/detail/:id" element={<MovieDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
