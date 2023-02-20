import "@/styles/globals.css";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const TodoContext = createContext();

export default function App({ Component, pageProps }) {
  const [todo, setTodo] = useState({ title: "", details: "" });
  const data = {
    todo,
    setTodo,
  };

  return (
    <>
      <TodoContext.Provider value={data}>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </TodoContext.Provider>
    </>
  );
}
