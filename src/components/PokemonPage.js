import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([])
  const [search, setSearch] = useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:3001/pokemon")
      .then(r=>r.json())
      .then(d=>{setPokeData(d);setSearch(d)})
  },[])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokeData={setPokeData} pokeData={pokeData}/>
      <br />
      <Search setSearch={setSearch} pokeData={pokeData}/>
      <br />
      <PokemonCollection search={search}/>
    </Container>
  );
}

export default PokemonPage;
