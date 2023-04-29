import React from "react";

const SearchBar = ({setSearchValue,seachValue,setSearchedFilm}) => {

  function handleSubmit(event){
    event.preventDefault();
    console.log("seachValue",seachValue);
    setSearchedFilm(seachValue)
    setSearchValue("")
  }

  return (
    <div className="SearchBar" onSubmit={handleSubmit}>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for the Movie..." value={seachValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
