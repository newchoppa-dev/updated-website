import { translation } from "../data/translation";
import { Link } from "react-router-dom";
import styles from "./Page.module.css";

export default function About({ lang }) {

  const t = translation[lang];

  return (
    <div>

      <header>
        <div className={styles.container}>
          <img className="borderline" src="/images/4.png" />
          <h1 className={styles.title}>{t.about_title}</h1>
          <p className={styles.boxes}>{t.about_info}</p>
        </div>
      </header>

      <main>
        <div className={styles.container}>
          <h2 className={styles.title}>{t.professional_interests_title}</h2>
          <p className={styles.boxes}>{t.professional_interests}</p>
        </div>
      </main>

      <div className={styles.container}>
        <Link className={styles.linkstyle} to="/">
          {t.main_link}
        </Link>
      </div>

    </div>
  );
}