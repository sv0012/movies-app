import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [genre, setGenre] = useState("")
  const handleClick = (e) =>{
    setGenre(e.target.value);
  }
  console.log(genre);
  return (
    <div className="container container-center">
       <h3>Movies</h3>
      <section className="section">
        <div className="container container-center">
         
          <p>Check out My Favourite Movies. Select a genre!</p>

          <ul className="list-non-bullet">
            <li className="list-item-inline ">
              <button onClick={handleClick} value="Action" className="btn-secondary">Action</button>
            </li>
            <li className="list-item-inline ">
              <button onClick={handleClick} value="Romance" className="btn-secondary">Romance</button>
            </li>
            <li className="list-item-inline ">
              <button onClick={handleClick} value="Anime" className="btn-secondary">Anime</button>
            </li>
          </ul>
          <hr />
        </div>
      </section>
      <List genre={genre} />
    </div>
  );
}

export default App;
