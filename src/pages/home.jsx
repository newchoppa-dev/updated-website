import { useState, useEffect } from "react";
import { translation } from "../data/translation";
import { assistantMessages } from "../data/assistant";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home({ lang }) {

  const t = translation[lang];

  const [assistantVisible, setAssistantVisible] = useState(false);
  const [assistantText, setAssistantText] = useState("");
  const [tag, setTag] = useState("all");
  const [selected, setSelected] = useState(null);

  const achievements = t.achievements;

  const filtered =
    tag === "all"
      ? achievements
      : achievements.filter(a => a.tags.includes(tag));

  const startAssistant = () => {
    setAssistantVisible(true);

    assistantMessages[lang].forEach((msg, i) => {
      setTimeout(() => setAssistantText(msg), i * 2500);
    });

    setTimeout(() => {
      setAssistantVisible(false);
    }, assistantMessages[lang].length * 2500);
  };

  const tags = ["all"];
  achievements.forEach(a =>
    a.tags.forEach(tag => {
      if (!tags.includes(tag)) tags.push(tag);
    })
  );

  return (
    <div>

      <Header t={t} />

      {assistantVisible && (
        <div className="assistant">
          <img src="/images/Clippy_guy.png" alt="" />
          <p className="text_style">{assistantText}</p>
        </div>
      )}

      <div className={`${styles.container} ${styles.layout}`}>
        <section className="boxes">
          <button className="buttonstyle" onClick={startAssistant}>
            {t.help}
          </button>
        </section>
      </div>

      <div className={`${styles.container} ${styles.layout}`}>
        <section className="boxes">
          <h2>{t.main_navigation}</h2>
          <ol>
            <li>{t.phone_number}</li>
            <li>{t.gmail}</li>
            <li>{t.telegram_tag}</li>
          </ol>
        </section>
      </div>

      <div className={`${styles.container} ${styles.layout}`}>
        <nav>
          <ul>
            <li className="linkstyle">
              <Link to="/">{t.main_link}</Link>
            </li>
            <li className="linkstyle">
              <Link to="/contacts">{t.contacts_link}</Link>
            </li>
			<li className="linkstyle">
			<Link className="linkstyle" to="/notes">{t.notes_title}</Link>
			</li>
          </ul>
        </nav>
      </div>

      <main>
        <div className={`${styles.container} ${styles.layout}`}>

          <section>
            <h2 className={styles.title}>{t.hobbies_title}</h2>

            <h3 className="boxes">{t.hobbies_desc}</h3>

            <ol className="boxes">
              <li>{t.hobbies}</li>
              <li>{t.love_to_do}</li>
            </ol>

            <nav>
              <Link to="/hobby" className="linkstyle">
                {t.hobbies_link}
              </Link>
            </nav>
          </section>

          <section>
            <h2 className={styles.title}>{t.skills_title}</h2>

            <h3 className="boxes">{t.skills_desc}</h3>

            <ol className="boxes">
              <li>{t.html_develop}</li>
              <li>{t.python_develop}</li>
            </ol>

            <nav>
              <Link to="/skills" className="linkstyle">
                {t.skills_link}
              </Link>
            </nav>
          </section>

          <section>
            <h2 className={styles.title}>{t.about_title}</h2>

            <h3 className="boxes">{t.about_desc}</h3>

            <ol className="boxes">
              <li>{t.university}</li>
              <li>{t.creativity}</li>
            </ol>

            <nav>
              <Link to="/about" className="linkstyle">
                {t.about_link}
              </Link>
            </nav>
          </section>

        </div>
      </main>

      <div className={`${styles.container} ${styles.layout}`}>
        <section>
          <h2 className={styles.title}>{t.achievements_title}</h2>

          <div className={styles.title}>
            {tags.map(x => (
              <button
                key={x}
                className="buttonTagsstyle"
                onClick={() => setTag(x)}
              >
                {x === "all" ? "All" : x}
              </button>
            ))}
          </div>

          <div className="boxes">
            {filtered.map(item => (
              <article key={item.id} className="boxes">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <button
                  className="buttonstyle"
                  onClick={() => setSelected(item)}
                >
                  {t.details_button}
                </button>
              </article>
            ))}
          </div>

          {selected && (
            <div className="modal open">
              <div className="modal_content">
                <h3>{selected.title}</h3>
                <p>{selected.details}</p>

                <button
                  className="buttonstyle"
                  onClick={() => setSelected(null)}
                >
                  {t.close_button}
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer />

    </div>
  );
}