import { JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { characters } from "../data";
import type { Character } from "../types";

function CharacterDetailsPage(): JSX.Element {
  const params = useParams();
  const idParam: string | undefined = params.id;

  const id: number | null = idParam !== undefined ? Number(idParam) : null;

  const character: Character | undefined =
    id !== null
      ? characters.find((item: Character) => item.id === id)
      : undefined;

  if (character === undefined) {
    return (
      <section>
        <h2>Персонаж не найден</h2>
        <Link to="/characters">Вернуться к списку персонажей</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{character.name}</h2>

      <img
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        style={{ borderRadius: "12px", objectFit: "cover" }}
      />

      <ul>
        <li>
          <strong>Status:</strong> {character.status}
        </li>
        <li>
          <strong>Species:</strong> {character.species}
        </li>
        <li>
          <strong>Type:</strong> {character.type || "—"}
        </li>
        <li>
          <strong>Gender:</strong> {character.gender}
        </li>
        <li>
          <strong>Created:</strong> {character.created}
        </li>
      </ul>

      <p>
        <Link to="/characters">← Назад к списку персонажей</Link>
      </p>
    </section>
  );
}

export default CharacterDetailsPage;
