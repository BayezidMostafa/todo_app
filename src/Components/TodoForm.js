import { db } from "@/Firebase/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState({ title: "", details: "" });

  const onSubmit = async () => {
    const collerctionRef = collection(db, "todos");
    const docRef = await addDoc(collerctionRef, {
      ...todo,
      time: serverTimestamp(),
    });
    alert(`Todo with the ID ${docRef.id} added successfully`);
  };

  return (
    <div>
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
        ADD A NEW ONE
      </button>
    </div>
  );
};

export default TodoForm;
