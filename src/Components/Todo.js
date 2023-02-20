import moment from "moment/moment";
import React from "react";

const Todo = ({ todo }) => {
  const { title, details, time, id } = todo;
  return (
    <div className="mt-3 shadow-md bg-[#FAFAFA] px-6 py-2">
      <p className="font-semibold uppercase">{title}</p>
      <p>{details}</p>
      <p>{moment(time).format("MMMM ddd, yyyy")}</p>
    </div>
  );
};

export default Todo;
