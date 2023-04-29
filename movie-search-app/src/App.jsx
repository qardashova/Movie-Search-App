import { useState, useEffect } from "react";
import "./styling/App.scss";
import Header from "./components/Header";
import MainContainer from "./pages/MainContainer";
import WatchLater from "./pages/WatchLater";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [seachValue, setSearchValue] = useState("");
  const [searchedFilm, setSearchedFilm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const [totalResult,setTotalResult] = useState(0)

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `http://www.omdbapi.com/?s=${searchedFilm}&apikey=647453a1&page=${currentPage}`;
      const result = await fetch(url);
      const data = await result.json();
      setMoviesData(data?.Search);
      setTotalResult(data?.totalResults)
    };
    fetchMovies();
  }, [searchedFilm,currentPage]);

  useEffect(()=> {
    setAllPages(Math.ceil(totalResult != 0 ? totalResult/10 : 0))
  },[totalResult])
  // console.log(moviesData);
  // console.log(totalResult);
  console.log(allPages);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer
              seachValue={seachValue}
              setSearchValue={setSearchValue}
              setSearchedFilm={setSearchedFilm}
              moviesData={moviesData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              allPages={allPages}
            />
          }
        />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
