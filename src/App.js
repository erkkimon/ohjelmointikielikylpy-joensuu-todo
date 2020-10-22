import React, { useState } from 'react';

function App() {

  let taskit = ["jutska 1", "jutska 2", "jutska 3", "jutska 4"]

  const [uusiTaski, paivitaUusiTaski] = useState("wertwert")

  function lisaaTaski() {
    alert("Morjesta, täällä nappi moi vaan!")
  }

  return (
    <div className="App">
      <p>Varmistusheippa</p>
      <input type="text" value={uusiTaski} />
      <input type="button" value="Lisää taski" onClick={() => lisaaTaski() } />
      <ul>
        { taskit.map( yksittainenTaski => <li>{yksittainenTaski}</li> )}
      </ul>
      {/*
        lista tehtävistä
        tehtävien poistaminen
      */}
    </div>
  );
}

export default App;
