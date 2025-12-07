import { JSX } from "react";
import { Link } from "react-router-dom";
import { episodes } from "../data";
import type { Episode } from "../types";

function EpisodesPage(): JSX.Element {
  return (
    <section>
      <h2>Эпизоды</h2>
      <ul>
        {episodes.map((episode: Episode) => (
          <li key={episode.id}>
            <Link to={`/episodes/${episode.id}`}>{episode.name}</Link> (
            {episode.episode}) — {episode.air_date}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EpisodesPage;
