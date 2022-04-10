import "./styles.css";
import { Note } from "./Note.js";
import { useState } from "react";

export default function App(props) {
  //el estado inicial sera lo que se le pase por props
  //que seran las notas en el archivo Note.js
  const [newNote, setNewNote] = useState("");

  //En este estado guardaremos y actualizaremos las nuevas notas
  const [notes, setNotes] = useState(props.notes);

  //con este estado filtraremos las notas
  const [showAll, setShowAll] = useState(true);
  if (typeof notes === "undefined" || notes.length === 0) {
    return "No existen notas que mostrar";
  }
  //con este metodo guardaremos el valor que se guarda en el input
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  //con este metodo confirmaremos y capturaremos el value
  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      import: Math.random() < 0.5
    };
    setNewNote("");
    //aqui agregamos el nuevo valor, al array de notas
    setNotes([...notes, noteToAddToState]);
  };

  //con este metodo filtraremos las notas importantes
  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };
  return (
    <div>
      <h1> Clase 4 del Bootcamp</h1>
      <h2>Notes </h2>
      <button onClick={handleShowAll}>
        {showAll ? "Show only inportant" : "Show all"}
      </button>
      <ol>
        {/*Esta key lo que hace es darle un identificador unico*/}
        {/*Con este filter, solo mostraremos los que cumplan la condicion */}
        {notes

          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })

          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} required />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}
