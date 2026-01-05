import React, { JSX } from "react";
import { AppRouter } from "./AppRouter";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <header>
        <h1>Rick and Morty Explorer</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/characters">Characters</a>
            </li>
            <li>
              <a href="/locations">Locations</a>
            </li>
            <li>
              <a href="/episodes">Episodes</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
