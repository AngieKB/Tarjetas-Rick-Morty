import { useEffect, useState } from "react";
import { getCharacters } from "./api/characters";
import type { Character } from "./types/Character";
import {Card} from "./components/Card";
// import { url } from "./api/characters";
// useEffect & Api Restful
// export let page = 1;


export const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<Character[]>([])

  useEffect(() => {
    (async () => {
      const characters = await getCharacters(page);

      setCharacters(characters);
    })();
  }, [page]);
  //Cada que se cambie characters por la funcion se vuelve a renderizar


  return (
    <>
      <header>
        <button onClick={() => {setPage(page -1)}}>Previous</button>
        <button onClick={() => {{setPage(page+1)}}}>Next</button>
      </header>
      <main className="catalog">
        {characters.map((character) => (
        //<Card key={crypto.randomUUID()} character={character}></Card>
        ))}
      </main>
      <section>
          <h2>Favoritos</h2>
          {favorites.map((favorites) => (
            <Card character={favorites}></Card>
          ))}
      </section>
    </>
  );
};
