import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { translation } from "./data/translation";

import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Hobby from "./pages/hobby";
import Skills from "./pages/skills";
import Notes from "./pages/notes";

export default function App() {

  const [lang, setLang] = useState(
    localStorage.getItem("language") || "uk"
  );

  const t = translation[lang];

  const changeLang = (l) => {
    setLang(l);
    localStorage.setItem("language", l);
  };

  return (
    <HashRouter basename="/updated-website">

      <nav className="container">

        <button className="buttonstyle" onClick={() => changeLang("uk")}>UA</button>
        <button className="buttonstyle" onClick={() => changeLang("eng")}>EN</button>

        <br />


      </nav>

      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/contacts" element={<Contacts lang={lang} />} />
        <Route path="/hobby" element={<Hobby lang={lang} />} />
        <Route path="/skills" element={<Skills lang={lang} />} />
		<Route path="/notes" element={<Notes lang={lang} />} />
      </Routes>

    </HashRouter>
  );
}