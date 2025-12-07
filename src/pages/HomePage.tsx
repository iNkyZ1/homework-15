import { JSX } from "react";
import { Link } from "react-router-dom";

function HomePage(): JSX.Element {
  return (
    <section>
      <h1>Rick and Morty cartoon</h1>
      <p>Добро пожаловать! Выберите категорию для просмотра:</p>

      <ul>
        <li>
          <Link to="/characters">Персонажи</Link>
        </li>
        <li>
          <Link to="/locations">Локации</Link>
        </li>
        <li>
          <Link to="/episodes">Эпизоды</Link>
        </li>
      </ul>
    </section>
  );
}

export default HomePage;
