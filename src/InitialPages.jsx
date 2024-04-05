import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./components/pages/Notes";
import CreateNotes from "./components/pages/CreateNotes";
import App from "./App";
import { useState } from "react";
import initialData from "./utils";
import { useEffect } from "react";
import Archives from "./components/pages/Archives";

const InitialPages = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("NOTES")) ?? initialData
  );

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App notes={notes} />}></Route>
        <Route
          path="/create"
          element={<CreateNotes setNotes={setNotes} />}
        ></Route>
        <Route
          path="/note/:noteId"
          element={<Notes notes={notes} setNotes={setNotes} />}
        ></Route>
        <Route
          path="/archives"
          element={<Archives notes={notes} setNotes={setNotes} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default InitialPages;
