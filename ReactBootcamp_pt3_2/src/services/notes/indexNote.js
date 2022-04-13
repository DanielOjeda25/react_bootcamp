import axios from "axios";

export const createNote = ({ title, body, userId }) => {
  //pero usaremos AXIOS
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const getAllNotes = () => {
  //pero usaremos AXIOS
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      //recuperamos lo que necesitamos de DATA
      const { data } = response;
      return data;
    });
};
