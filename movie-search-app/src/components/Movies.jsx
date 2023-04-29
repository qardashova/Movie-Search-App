import React from "react";
import Movie from "./movies/Movie";
import popcornImage from "../images/3d-cat.png";
import Pagination from "@mui/material/Pagination";

const Movies = ({ moviesData, currentPage, setCurrentPage, allPages }) => {
  // console.log(moviesData);
  // moviesData.map((el) => {
  //   console.log(el);
  // })
  function handleChange(e, p) {
    // console.log(e, p);
    setCurrentPage(p);
  }

  return (
    <div className="Movies">
      {moviesData ? (
        <div>
          <div className="movies-container">
            {moviesData.map((el) => (
              <Movie
                key={el.imdbID}
                id={el.imdbID}
                poster={el.Poster}
                title={el.Title}
                type={el.Type}
                year={el.Year}
              />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              count={allPages}
              color="primary"
              onChange={handleChange}
            ></Pagination>
          </div>
        </div>
      ) : (
        <div className="popcorn">
          <h2 style={{ textAlign: "center", color: "rgb(10, 10, 46)" }}>
            Search for the movies, you want to watch...
          </h2>
          <img src={popcornImage} />
        </div>
      )}
    </div>
  );
};

export default Movies;
