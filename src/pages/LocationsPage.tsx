import { JSX } from "react";
import { Link } from "react-router-dom";
import { locations } from "../data";
import type { Location } from "../types";

function LocationsPage(): JSX.Element {
  return (
    <section>
      <h2>Локации</h2>
      <ul>
        {locations.map((location: Location) => (
          <li key={location.id}>
            <Link to={`/locations/${location.id}`}>{location.name}</Link> —{" "}
            {location.type}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsPage;
