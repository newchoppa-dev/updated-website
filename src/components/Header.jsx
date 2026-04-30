import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ t }) {

  const [open, setOpen] = useState(false);

  return (
    <header>

      <div className="container layout">
        <img className="borderline" src="images/1.png" alt="" />

        <h1 className="title">{t.main_title}</h1>

        <img src="images/title.gif" alt="" />

        <p className="title">
          <strong>{t.portfolio_title}</strong>
        </p>
      </div>

      <div className="container">

        <button
          className="buttonstyle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={open ? "navOpen" : "navClosed"}>

          <Link className="linkstyle" to="/" onClick={() => setOpen(false)}>
            {t.main_link}
          </Link>

          <Link className="linkstyle" to="/about" onClick={() => setOpen(false)}>
            {t.about_link}
          </Link>

          <Link className="linkstyle" to="/contacts" onClick={() => setOpen(false)}>
            {t.contacts_link}
          </Link>

          <Link className="linkstyle" to="/hobby" onClick={() => setOpen(false)}>
            {t.hobbies_link}
          </Link>

          <Link className="linkstyle" to="/skills" onClick={() => setOpen(false)}>
            {t.skills_link}
          </Link>

          <Link className="linkstyle" to="/notes" onClick={() => setOpen(false)}>
            {t.notes_title}
          </Link>

        </nav>

      </div>

    </header>
  );
}