import { db } from "@/Firebase/firebase.config";
import { TodoContext } from "@/pages/_app";
import { deleteDoc, doc } from "firebase/firestore";
import moment from "moment/moment";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { MdDelete, MdMoreVert } from "react-icons/md";

const Todo = ({ todoo }) => {
  const { title, details, time, id } = todoo;
  const { todo, setTodo } = useContext(TodoContext);
  const deleteTodo = async (e) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
    toast.error("!Todo Deleted");
  };

  return (
    <div
      onClick={() => setTodo({ title, details, time, id })}
      className="mt-3 shadow-md bg-[#FAFAFA] px-6 py-2 flex justify-between items-center"
    >
      <div className="">
        <p className="font-semibold uppercase">{title}</p>
        <p>{details}</p>
        <p>{moment(time).format("MMMM ddd, yyyy")}</p>
      </div>
      <div className="flex items-center">
        <MdDelete
          onClick={deleteTodo}
          className="text-4xl cursor-pointer hover:text-red-600 text-red-500 active:text-red-700"
        />
        <MdMoreVert className="text-4xl cursor-pointer hover:text-gray-600 text-gray-500 active:text-gray-700" />
      </div>
    </div>
  );
};

export default Todo;
