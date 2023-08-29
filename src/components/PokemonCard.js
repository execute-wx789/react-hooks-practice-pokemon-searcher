import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, fsrc, bsrc}) {
  const [srcState,setSrcState]=useState(true)
  return (
    <Card>
      <div>
        <div className="image" onClick={()=>setSrcState(!srcState)}>
          <img alt="oh no!" src={srcState?fsrc:bsrc} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
