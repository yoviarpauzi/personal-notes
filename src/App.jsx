import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import NoteList from "./components/templates/NoteList/index.jsx";
import "./App.css";
import { useState } from "react";
import { FaArchive } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const App = ({ notes }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchActive = () => {};

  return (
    <>
      <header className="header__container container">
        <h1 className="header__logo">Notes</h1>

        <nav className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="archives">
                <button type="button" className="header__button-archive">
                  <FaArchive className="icon" />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="add__feature-container container">
        <Link to="create">
          <button type="button" className="button__add">
            <IoAdd className="icon icon__add" />
          </button>
        </Link>
      </section>

      <main className="main container">
        {notes.length > 0 ? (
          <NoteList notes={notes.filter((item) => item.archived != true)} />
        ) : (
          <p className="notFound">Belum ada catatan</p>
        )}
      </main>
    </>
  );
};

export default App;
