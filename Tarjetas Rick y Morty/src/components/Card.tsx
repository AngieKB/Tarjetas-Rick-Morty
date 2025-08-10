import { useEffect, useState } from "react";
import type { Character } from "../types/Character";
interface CardProps {
  character: Character;
}
export function Card({ character }: CardProps) {
  const [status, setStatus] = useState ("");

  function handleSetStatus(){
    if(character.status == "Alive"){
      setStatus("🟢")
    }else{
      setStatus("🔴")
    }
  }

  useEffect(() => {
    handleSetStatus();
  }, [character.status]);

  function handleSetCharacter(){
    
  }

  return (
    <div className="div-character" onClick={() => }>
      <img src={character.image}></img>
      <div className="div-text">
        <h5 className="character-name">{character.name}</h5>
        <h5 className="character-detail">id: {character.id}</h5>  
        <h5 className="character-status">Status:</h5>
        <h5 className="character-detail">{status} {character.status}</h5>
        <h5 className="character-status">Gender:</h5>
        <h5 className="character-detail">{character.gender}</h5>
        </div>
    </div>
  );
}
