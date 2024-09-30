import React from "react";

function TokenMessage({ user, message, admin }) {
  return (
    <div
      className={`border-2 shadow-md p-4 rounded-lg ${admin && "bg-[#EEF2F7]"}`}
    >
      <h2 className=" text-xl font-semibold">{user}</h2>
      <p>{message}</p>
    </div>
  );
}

export default TokenMessage;
