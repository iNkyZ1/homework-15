import { JSX } from "react";
import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <section>
      <h2>404 — страница не найдена</h2>
      <p>Похоже, вы попали в не туда…</p>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
