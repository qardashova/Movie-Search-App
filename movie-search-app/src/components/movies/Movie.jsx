import React from "react";
import { useState, useContext } from "react";
import { WatchLaterContext } from "../../context/WatchLaterProvider";
import { BiMoviePlay } from "react-icons/bi";
import { BsTrash3Fill } from "react-icons/bs";
import Modal from "react-modal";
import { Link, useLocation } from "react-router-dom";

Modal.setAppElement("#root");


const Movie = ({ poster, title, year, type, id }) => {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  // console.log(location.pathname);
  // console.log(location.pathname == '/watch-later');

  const { addToWatchList, deleteFromWatchList } = useContext(WatchLaterContext);

  const handleAddToWatchList = () => {
    setShowModal(true);
    addToWatchList(id); // add the movie ID to the watch list
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };
  

  return (
    <div
      className="Movie"
      style={{
        backgroundImage: `URL(${poster})`,
        backgroundColor: "black"
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover && (
        <div className="card-details">
          <h2>{title}</h2>
          <p>Year: {year}</p>
          <p>Type: {type}</p>
          {location.pathname == "/watch-later" ? (
            <button className="watch-later" onClick={() => {deleteFromWatchList(id)}} style={{padding:"3px 7px"}}>
              <BsTrash3Fill size={22} className="icon" />
            </button>
          ) : (
            <button className="watch-later" onClick={handleAddToWatchList}>
              <BiMoviePlay size={26} className="icon" />
            </button>
          )}
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
          <Link to={`/${id}`}>
            <button className="about-more">More About This Movie</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Movie;
