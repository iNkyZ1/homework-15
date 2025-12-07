import charactersJson from "./characters.json";
import episodesJson from "./episodes.json";
import locationsJson from "./locations.json";
import type { Character, Episode, Location } from "../types";

export const characters: Character[] = charactersJson as Character[];
export const episodes: Episode[] = episodesJson as Episode[];
export const locations: Location[] = locationsJson as Location[];
