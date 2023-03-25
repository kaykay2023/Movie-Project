import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./source/Home";
//import About from "./source/About";
import Navbar from "./components/Navbar";
import CharacterDetails from "./source/CharacterDetails";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        {/* <Route path={"/about"}  element={<About/>}/> */}
        <Route path={"/:id"}  element={<CharacterDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// {/* <div className="App">
// <div className="search">
//   <div>
//     <h1>Movies</h1>
//   </div>

//   <div>
//     <form>
//       <input />
//       <button>Search</button>
//     </form>
//   </div>
// </div>

// <div className="movies"></div>
// </div> */}
