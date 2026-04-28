export default function Header({ t }) {
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
    </header>
  );
}