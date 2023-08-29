import React from "react";

function Search({setSearch,pokeData}) {
  function filterSearch(e){
    setSearch(pokeData.filter((poke)=>poke.name.includes(e.target.value)))
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e)=>filterSearch(e)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
