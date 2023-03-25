import React,{useState} from "react";
import Utility from "../components/Utility";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";

function Home() {
  const[character, setCharacter] = useState([])

  return (
    <Utility>
      <h1>Discover</h1>
      <SearchBar set={setCharacter} />
      <Grid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
    </Utility>
  );
}

export default Home;
