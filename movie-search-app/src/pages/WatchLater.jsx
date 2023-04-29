import React, { useContext } from "react";
import Movie from "../components/movies/Movie";
import { WatchLaterContext } from "../context/WatchLaterProvider";
import { GiPopcorn } from "react-icons/gi";

const WatchLater = () => {
  const { watchList } = useContext(WatchLaterContext);
  console.log(watchList);

  return (
    <div className="WatchLater">
      <h2 className="description">Your Watch List</h2>
      {watchList && watchList.length > 0 ? (
        <div className="watch-later-container">
          {watchList?.map((el) => {
            return (
              <Movie
                key={el.imdbID}
                id={el.imdbID}
                poster={el.Poster}
                title={el.Title}
                type={el.Type}
                year={el.Year}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-list">
          <p>
            Go back to <span>Home Page</span> to add movies to your{" "}
            <span>Watch List</span>
          </p>
          <GiPopcorn size={40} color={"red"} />
        </div>
      )}
    </div>
  );
};

export default WatchLater;
