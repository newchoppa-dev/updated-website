import { translation } from "../data/translation";
import { Link } from "react-router-dom";
import styles from "./Page.module.css";

export default function Hobby({ lang }) {

  const t = translation[lang];

  return (
    <div>

      <header>
        <div className={styles.container}>
          <img className="borderline" src="/images/5.png" />
        </div>
      </header>

      <main>
        <div className={styles.container}>
          <img src="/images/title.gif" />

          <h2 className={styles.title}>{t.hobbies_desc}</h2>

          <h3 className={styles.boxes}>{t.new_hobbies}</h3>
          <p className={styles.boxes}>{t.hobbies_info}</p>

          <h3 className={styles.boxes}>{t.lovely_hobbies}</h3>
          <p className={styles.boxes}>{t.lovely_hobbies_info}</p>
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