import { JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { episodes } from "../data";
import type { Episode } from "../types";

function EpisodeDetailsPage(): JSX.Element {
  const params = useParams();
  const idParam: string | undefined = params.id;
  const id: number | null = idParam !== undefined ? Number(idParam) : null;

  const episode: Episode | undefined =
    id !== null ? episodes.find((item: Episode) => item.id === id) : undefined;

  if (episode === undefined) {
    return (
      <section>
        <h2>Эпизод не найден</h2>
        <Link to="/episodes">Вернуться к списку эпизодов</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{episode.name}</h2>
      <ul>
        <li>
          <strong>Episode:</strong> {episode.episode}
        </li>
        <li>
          <strong>Air date:</strong> {episode.air_date}
        </li>
        <li>
          <strong>Created:</strong> {episode.created}
        </li>
      </ul>

      <p>
        <Link to="/episodes">← Назад к списку эпизодов</Link>
      </p>
    </section>
  );
}

export default EpisodeDetailsPage;
