import { translation } from "../data/translation";
import { Link } from "react-router-dom";
import styles from "./Page.module.css";

export default function Contacts({ lang }) {

  const t = translation[lang];

  return (
    <div>

      <header>
        <div className={styles.container}>
          <img className="borderline" src="images/2.png" />
          <h1 className={styles.title}>{t.contacts_link}</h1>
        </div>
      </header>

      <main>
        <div className={styles.container}>
          <img src="images/title.gif" />

          <h2 className={styles.title}>{t.contacts_title}</h2>

          <div className={styles.boxes}>
            <p><strong>email:</strong> freddypink22@gmail.com</p>
            <p><strong>mobile:</strong> +38 (098) 324-29-78</p>
            <p><strong>telegram:</strong> @Daniil_Shmakow</p>
          </div>
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