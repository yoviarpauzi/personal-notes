import NoteList from "../../templates/NoteList";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./index.css";

const Archives = ({ notes, setNotes }) => {
  return (
    <>
      <header className="header__container container">
        <Link to="/">
          <button type="button" className="button__left">
            <FaArrowLeft className="icon" />
          </button>
        </Link>
      </header>
      <main className="main container">
        {notes.length > 0 ? (
          <NoteList notes={notes.filter((item) => item.archived == true)} />
        ) : (
          <p className="notFound">Belum ada catatan</p>
        )}
      </main>
    </>
  );
};

export default Archives;
