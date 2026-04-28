import { translation } from "../data/translation";
import { Link } from "react-router-dom";
import styles from "./Page.module.css";

export default function Skills({ lang }) {

  const t = translation[lang];

  return (
    <div>

      <header>
        <div className={styles.container}>
          <img className="borderline" src="/images/3.png" />
          <h1 className={styles.title}>{t.skills_title}</h1>
        </div>
      </header>

      <main>
        <div className={styles.container}>
          <p className={styles.boxes}>{t.skills_info}</p>
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