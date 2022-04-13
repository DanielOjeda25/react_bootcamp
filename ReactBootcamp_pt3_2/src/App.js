import "./styles.css";
import { Note } from "./Note.js";
import { useState, useEffect } from "react";
import { getAllNotes, createNote } from "./services/notes/indexNote";

export default function App(props) {
  //el estado inicial sera lo que se le pase por props
  //que seran las notas en el archivo Note.js
  const [notes, setNotes] = useState([]);
  //En este estado guardaremos y actualizaremos las nuevas notas
  const [newNote, setNewNote] = useState("");
  //creamos un estado para mostrar un Loading
  const [loading, setLoading] = useState(false);
  //posiblmente pueda haber un error en la API
  const [error, setError] = useState(" ");
  //usaremos UseEffect , es un hook que se ejecuta cada vez que
  //se reenderiza el componente
  useEffect(() => {
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });

    //podemos usar el fetch a una API
    //fetch("https://jsonplaceholder.typicode.com/posts")
  }, []);

  //con este metodo guardaremos el valor que se guarda en el input
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  //con este metodo confirmaremos y capturaremos el value
  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    setError("");

    //aqui crearemos un POST con axios
    createNote(noteToAddToState)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((e) => {
        console.error(e);
        setError("Ha ocurrido un error en la API " + e);
      });
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes:</h1>
      <ol>
        {loading ? "Loading" : ""}
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} required />
        <button>Crear Nota</button>
      </form>
      {error ? <p style={{ color: "red" }}>{error}</p> : ""}
    </div>
  );
}
