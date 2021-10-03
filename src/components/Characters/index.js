import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import CharCard from "../CharCard";

function Characters() {
  const [characterList, setCharacterList] = useState([]);

  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, [next]);

  console.log(next);

  const nextPage = () => {
    if (next < 34) {
      setNext(next + 1);
    }
  };

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  return (
    <div>
      <h1>Meus personagens</h1>
      {characterList.map((element) => (
        <CharCard character={element} />
      ))}

      <button onClick={previousPage}>Página anterior</button>
      <button onClick={nextPage}>Próxima página</button>
    </div>
  );
}

export default Characters;
