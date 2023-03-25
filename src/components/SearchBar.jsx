import React, { useRef } from "react";
import { fetchCharacter } from "../charac/charac";

function SearchBar({ set }) {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;

    try {
      let character = await fetchCharacter(value);
      set(character);
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <form>
      <input type="text" placeholder="Search..." ref={input} />
      <button onClick={handleClick}>Search</button>
    </form>
  );
}

export default SearchBar;
