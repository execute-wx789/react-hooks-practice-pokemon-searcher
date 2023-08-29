import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({search}) {
  function renderData(){
    return search.map((poke)=>{return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} fsrc={poke.sprites.front} bsrc={poke.sprites.back}/>})
  }
  return (
    <Card.Group itemsPerRow={6}>
      {renderData()}
    </Card.Group>
  );
}

export default PokemonCollection;
