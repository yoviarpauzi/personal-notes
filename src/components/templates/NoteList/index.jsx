import "./index.css";
import NoteItem from "../../fragments/NoteItem";

const NoteList = ({ notes }) => {
  return (
    <div className="noteList__container">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
