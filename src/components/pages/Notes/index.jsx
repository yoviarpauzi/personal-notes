import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { MdArchive } from "react-icons/md";
import { MdUnarchive } from "react-icons/md";

const Notes = ({ notes, setNotes }) => {
  const { noteId } = useParams();
  const note = notes.find((item) => item.id == noteId);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const navigate = useNavigate();

  const moveNotes = () => {
    const newNote = {
      id: note.id,
      title: note.title,
      body: note.body,
      createdAt: new Date().toISOString(),
      archived: note.archived == true ? false : true,
    };

    const newNotes = notes.map((item) => {
      if (item.id == noteId) {
        item = newNote;
      }
      return item;
    });

    setNotes(newNotes);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: noteId,
      title: title,
      body: body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    const newNotes = notes.map((item) => {
      if (item.id == noteId) {
        item = newNote;
      }
      return item;
    });

    setNotes(newNotes);
    navigate("/");
  };

  const deleteNote = () => {
    const newNotes = notes.filter((item) => item.id != noteId);
    setNotes(newNotes);
    navigate("/");
  };

  return (
    <>
      <header className="header__container container">
        <Link to="/" className="nav__link">
          <button type="button" className="button__back">
            <IoIosArrowBack className="icon" />
          </button>
        </Link>
        <div className="header__button-container">
          <button
            type="button"
            className="header__button button__save"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="header__button button__delete"
            onClick={deleteNote}
          >
            Delete
          </button>
        </div>
      </header>
      <main className="main container">
        <form className="form__notes-container" onSubmit={handleSubmit}>
          <div className="form__title-container">
            <input
              type="text"
              className="input__title form__input"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="form__body-container">
            <textarea
              className="input__body form__input"
              rows="28"
              placeholder="Write here..."
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </div>
        </form>
      </main>
      <section className="addToArchive__container container">
        <button
          type="button"
          className="button__addToArchive"
          onClick={moveNotes}
        >
          {note.archived == false ? (
            <MdArchive className="icon" />
          ) : (
            <MdUnarchive className="icon" />
          )}
        </button>
      </section>
    </>
  );
};

export default Notes;
