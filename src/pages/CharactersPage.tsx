import { JSX, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { characters } from "../data";
import type { Character } from "../types";

type SortOrder = "asc" | "desc";

function CharactersPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortParam: string | null = searchParams.get("sort");
  const sortOrder: SortOrder = sortParam === "desc" ? "desc" : "asc";

  const sortedCharacters: Character[] = useMemo(() => {
    const copiedCharacters: Character[] = [...characters];

    copiedCharacters.sort((a, b) => {
      const dateA: number = new Date(a.created).getTime();
      const dateB: number = new Date(b.created).getTime();

      if (sortOrder === "asc") {
        return dateA - dateB;
      }

      return dateB - dateA;
    });

    return copiedCharacters;
  }, [sortOrder]);

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    const value: string = event.target.value;
    const nextSortOrder: SortOrder = value === "desc" ? "desc" : "asc";

    setSearchParams({ sort: nextSortOrder });
  }

  return (
    <section>
      <h2>Персонажи</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>
          Сортировать по дате создания:{" "}
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">По возрастанию (старые → новые)</option>
            <option value="desc">По убыванию (новые → старые)</option>
          </select>
        </label>
      </div>

      <ul
        style={{ display: "grid", gap: "12px", listStyle: "none", padding: 0 }}
      >
        {sortedCharacters.map((character: Character) => (
          <li
            key={character.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              width={80}
              height={80}
              style={{ borderRadius: "8px", objectFit: "cover" }}
            />
            <div>
              <Link to={`/characters/${character.id}`}>
                <strong>{character.name}</strong>
              </Link>
              <div>
                {character.status} • {character.species}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CharactersPage;
