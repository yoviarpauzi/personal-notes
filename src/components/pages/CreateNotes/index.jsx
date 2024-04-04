import { useState } from "react";
import "./index.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateNotes = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      id: crypto.randomUUID(),
      title: title,
      body: body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes((prevNotes) => [note, ...prevNotes]);
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
        <button type="button" className="header__button" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <main className="main container">
        <form className="form__notes-container" onSubmit={handleSubmit}>
          <div className="form__title-container">
            <input
              type="text"
              className="input__title form__input"
              placeholder="Title"
              autoFocus
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
      <footer></footer>
    </>
  );
};

export default CreateNotes;
