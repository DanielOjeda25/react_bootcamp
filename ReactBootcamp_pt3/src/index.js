import { createRoot } from "react-dom/client";
import App from "./App";

//este es una lista de elementos
const notes = [
  {
    id: 1,
    content: "HTHML is easy",
    date: "2022-04-10",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only javascript",
    date: "2022-04-10",
    important: false
  },
  {
    id: 3,
    content: "GET and Post are the most inportant methods of HTTP protocol",
    date: "2022-04-10",
    important: true
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notes={notes} />);
