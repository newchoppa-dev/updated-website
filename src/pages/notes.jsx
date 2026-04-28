import { useState, useEffect } from "react";
import { translation } from "../data/translation";
import { Link } from "react-router-dom";

export default function Notes({ lang }) {

  const t = translation[lang];

  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes") || "[]");
  });

  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);

  const NOTES_PER_PAGE = 5;

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!input.trim()) return;

    const updated = [
      ...notes,
      { id: Date.now(), text: input }
    ];

    setNotes(updated);
    setPage(Math.ceil(updated.length / NOTES_PER_PAGE));
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const start = (page - 1) * NOTES_PER_PAGE;
  const current = notes.slice(start, start + NOTES_PER_PAGE);

  const pages = Math.ceil(notes.length / NOTES_PER_PAGE);

  return (
    <div>

      <header>
        <div className="container">
          <p className="title"><strong>{t.notes_app}</strong></p>
        </div>
      </header>

      <main>
        <div className="container">

          <div className="notesBlock">

            <div className="notesTop">
              <input
                className="input_style"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.notes_placeholder}
              />

              <button className="buttonstyle" onClick={addNote}>
				  {t.add_button}
              </button>
            </div>

            <div className="notesList">
              {current.map(n => (
                <div key={n.id} className="noteItem">
                  <span>{n.text}</span>

                  <button
                    className="buttonstyle"
                    onClick={() => deleteNote(n.id)}
                  >
				  {t.delete_button}
                  </button>
                </div>
              ))}
            </div>

            <div className="notesPagination">
              {[...Array(pages)].map((_, i) => (
                <button
                  key={i}
                  className="buttonstyle"
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

          </div>

        </div>
      </main>

      <div className="container">
        <Link className="linkstyle" to="/">
          {t.main_link}
        </Link>
      </div>

    </div>
  );
}