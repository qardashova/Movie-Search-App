import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

export const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [watchID, setWatchID] = useState([]);
  const [add, setAdd] = useState(false);
  // const [remove,setRemove] = useState(false)

  console.log(watchList);
  //   console.log(watchID);
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    const fetchWatchData = async (movieID) => {
      const url = `http://www.omdbapi.com/?i=${movieID}&apikey=647453a1`;
      const response = await fetch(url);
      const data = await response.json();
      setWatchList((prev) => [...prev, data]);
    };
    fetchWatchData(watchID ? watchID[watchID?.length - 1]?.imdbID : "");
  }, [add]);

  const addToWatchList = (movieID) => {
    console.log(movieID);
    setAdd((prev) => !prev);
    setWatchID((prev) => [...prev, { imdbID: movieID }]);
    console.log(movieID);

    // //? Add movies to local storage
    localStorage.setItem(
      "watchList",
      JSON.stringify([...watchList, { imdbID: movieID }])
    );
  };

  const deleteFromWatchList = (id) => {
    const newWatchList = watchList.filter((movie) => movie.imdbID != id);
    setWatchList(newWatchList);
    console.log(newWatchList, id);

    // //? Remove from local storage
    localStorage.setItem(
      "watchList",
      JSON.stringify(newWatchList.map((movie) => movie.imdbID))
    );
  };

  // useEffect(() => {
  //   const savedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
  //   if (savedWatchList && savedWatchList.length > 0) {
  //     setWatchList(savedWatchList);
  //   }
  // }, [watchList]);

  const contextValue = {
    watchList,
    addToWatchList,
    deleteFromWatchList,
  };
  return (
    <WatchLaterContext.Provider value={contextValue}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export default WatchLaterProvider;
