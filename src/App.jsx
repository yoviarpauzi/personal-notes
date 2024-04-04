import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import NoteList from "./components/templates/NoteList/index.jsx";
import "./App.css";

const App = ({ notes }) => {
  return (
    <>
      <header className="header__container container">
        <h1 className="header__logo">Notes</h1>
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
          <NoteList notes={notes} />
        ) : (
          <h1>Belum ada catatan</h1>
        )}
      </main>
    </>
  );
};

export default App;
