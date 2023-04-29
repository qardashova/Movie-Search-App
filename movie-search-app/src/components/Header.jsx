import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="Header">
      <Link to={'/'} style={{textDecoration:"none",color: "white"}}><h1>HOOKED</h1></Link>
      {location.pathname == "/" ? (
        <Link to={"/watch-later"}>
          <div className="watch-later">
            <h4>Watch Later</h4>
            <BiMoviePlay size={26} className="icon" />
          </div>
        </Link>
      ) : (
        <Link to={"/"}>
          <div className="back-to-home">
            <BiArrowBack size={26} />
            <h4>Back To Home</h4>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
