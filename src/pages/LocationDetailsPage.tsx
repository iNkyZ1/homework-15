import { JSX } from "react";
import { useParams, Link } from "react-router-dom";
import { locations } from "../data";
import type { Location } from "../types";

function LocationDetailsPage(): JSX.Element {
  const params = useParams();
  const idParam: string | undefined = params.id;
  const id: number | null = idParam !== undefined ? Number(idParam) : null;

  const location: Location | undefined =
    id !== null
      ? locations.find((item: Location) => item.id === id)
      : undefined;

  if (location === undefined) {
    return (
      <section>
        <h2>Локация не найдена</h2>
        <Link to="/locations">Вернуться к списку локаций</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>{location.name}</h2>
      <ul>
        <li>
          <strong>Type:</strong> {location.type}
        </li>
        <li>
          <strong>Dimension:</strong> {location.dimension}
        </li>
        <li>
          <strong>Created:</strong> {location.created}
        </li>
      </ul>

      <p>
        <Link to="/locations">← Назад к списку локаций</Link>
      </p>
    </section>
  );
}

export default LocationDetailsPage;
