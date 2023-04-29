import React, { useEffect, useState, useContext } from "react";
import { WatchLaterContext } from "../context/WatchLaterProvider";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "../styling/Details.scss";

Modal.setAppElement("#root");

const Details = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const [showModal, setShowModal] = useState(false);

  const { addToWatchList } = useContext(WatchLaterContext);

  const handleAddToWatchList = () => {
    setShowModal(true);
    addToWatchList(id); // add the movie ID to the watch list
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };


  useEffect(() => {
    const fetchWatchData = async () => {
      const url = `http://www.omdbapi.com/?i=${id}&apikey=647453a1`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetail(data);
    };
    fetchWatchData();
  }, [id]);

  // console.log(movieDetail);

  return (
    <div className="Details">
      <div className="details-card">
        <div
          className="movie-poster"
          style={{ backgroundImage: `url(${movieDetail?.Poster})` }}
        ></div>
        <div className="movie-about">
          <div className="title">
            {" "}
            <h1>{movieDetail.Title}</h1>
          </div>
          <div className="writer">
            <p>
              Writer: <span>{movieDetail.Writer}</span>
            </p>
          </div>
          <div className="year-rating-votes">
            <div className="year">
              Year: <span>{movieDetail.Year}</span>
            </div>
            <div className="rating">
              Rating: <span>{movieDetail.imdbRating}</span>
            </div>
            <div className="votes">
              Votes: <span>{movieDetail.imdbVotes}</span>
            </div>
          </div>
          <div className="genre">
            <p>
              Genre: <span>{movieDetail.Genre}</span>
            </p>
          </div>
          <div className="about">
            <span>About:</span>
            <p>{movieDetail.Plot}</p>
          </div>
          <Modal
            isOpen={showModal}
            onRequestClose={() => {}}
            style={{
              content: {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                padding: "30px 50px",
                maxWidth: "450px",
                maxHeight: "100px",
                textAlign: "center",
                fontSize: "0.9rem",
                color: "rgb(10, 10, 46)",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <h2>
              Added to <span style={{ color: "red" }}>Watch Later</span> List
            </h2>
          </Modal>
          <div className="button" onClick={handleAddToWatchList}>
            <button>Add to Watch Later List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
