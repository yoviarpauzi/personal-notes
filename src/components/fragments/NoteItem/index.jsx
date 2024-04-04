import "./index.css";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`note/${note.id}`}>
      <div className="noteItem__container">
        <h3 className="noteItem__title">
          {note.title.length > 20
            ? note.title.substr(0, 20) + "..."
            : note.title}
        </h3>
        <p className="noteItem__body">
          {note.body.length > 80 ? note.body.substr(0, 80) + "..." : note.body}
        </p>
        <p className="noteItem__date">
          {new Date(note.createdAt).toLocaleString() + " "}
        </p>
      </div>
    </Link>
  );
};

export default NoteItem;
