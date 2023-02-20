import { db } from "@/Firebase/firebase.config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const collerctionRef = collection(db, "todos");
    const q = query(collerctionRef, orderBy("time", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          time: doc.data().time?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <TodoForm />
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
