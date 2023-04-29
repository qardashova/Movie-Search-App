import React from "react";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";

const MainContainer = ({
  setSearchValue,
  seachValue,
  setSearchedFilm,
  moviesData,
  currentPage,
  setCurrentPage,
  allPages,
}) => {
  return (
    <div className="container">
      <SearchBar
        seachValue={seachValue}
        setSearchValue={setSearchValue}
        setSearchedFilm={setSearchedFilm}
      />
      <Movies
        moviesData={moviesData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allPages={allPages}
      />
    </div>
  );
};

export default MainContainer;
