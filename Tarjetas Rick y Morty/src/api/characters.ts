
const requestConfig = {
  method: "GET",

  headers: {
    "Content-Type": "application/json",
  },
};

export const getCharacters = async (page:number) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const res = await fetch(url, requestConfig);
    const character = await res.json();
    return character.results;
  } catch (err) {
    if (err instanceof Error)
      console.error({
        message: err.message,
        name: err.name,
      });
  }
};

// export const createCharacters = () => {};
// export const updateCharacter = () => {};
// export const deleteCharacter = () => {};
