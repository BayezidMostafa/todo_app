import { db } from "@/Firebase/firebase.config";
import { TodoContext } from "@/pages/_app";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

const TodoForm = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const onSubmit = async () => {
    if (todo?.hasOwnProperty("time")) {
      // Update
      const docRef = doc(db, "todos", todo.id);
      const todoUpdate = { ...todo, time: serverTimestamp() };
      updateDoc(docRef, todoUpdate);
      setTodo({ title: "", details: "" });
      toast.success("Successfully Updated");
    } else {
      const collerctionRef = collection(db, "todos");
      const docRef = await addDoc(collerctionRef, {
        ...todo,
        time: serverTimestamp(),
      });
      toast.success("Successfull Added");
      setTodo({ title: "", details: "" });
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputRef.current.contains(e.target)) {
        console.log("Outside input area");
        setTodo({ title: "", details: "" });
      } else {
        console.log("Inside of the input");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [setTodo]);

  return (
    <div ref={inputRef}>
      <input
        className="w-full px-2 py-2 focus:outline-purple-500 mt-2 border-purple-300 border-2 rounded"
        type="text"
        placeholder="Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        className="w-full px-2 py-2 focus:outline-purple-500 mt-2 border-purple-300 border-2 rounded"
        type="text"
        placeholder="Details"
        value={todo.details}
        onChange={(e) => setTodo({ ...todo, details: e.target.value })}
      />
      <button
        onClick={onSubmit}
        className="bg-purple-600 px-5 py-2 rounded hover:bg-purple-500 duration-300 mt-2 active:bg-purple-600 font-semibold text-white"
      >
        {todo?.hasOwnProperty("time") ? "Update Todo" : "Add A New One"}
      </button>
    </div>
  );
};

export default TodoForm;
