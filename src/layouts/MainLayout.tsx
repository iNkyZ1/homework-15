import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout(): JSX.Element {
  return (
    <div>
      <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "12px" }}>
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/episodes">Episodes</Link>
        </nav>
      </header>

      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
