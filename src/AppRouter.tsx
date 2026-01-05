import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JSX } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import LocationsPage from "./pages/LocationsPage";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import EpisodesPage from "./pages/EpisodesPage";
import NotFoundPage from "./pages/NotFoundPage";

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="characters/:id" element={<CharacterDetailsPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="locations/:id" element={<LocationDetailsPage />} />
          <Route path="episodes" element={<EpisodesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
