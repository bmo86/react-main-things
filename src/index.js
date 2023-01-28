import React, { useState } from "react";
import ReactDom from "react-dom/client";
//import { Greeting, UserCard } from "./Greeting";
//import Product, { Nanbar } from "./Product";
//import { TaskCard } from "./Task";
//import { Button } from "./Button";
//import { Hello } from "./Hello";
//import { Post } from "./Post";

const usrs = [
  {
    id: 1,
    name: "Victor Monje",
    image: "https://robohash.org/Bmo",
  },
  {
    id: 2,
    name: "Joe Juan",
    image: "https://robohash.org/Bmo2",
  },
  {
    id: 3,
    name: "Mario Monje",
    image: "https://robohash.org/Bmo3",
  },
];

const root = ReactDom.createRoot(document.getElementById("root"));

function Counter() {
  // var and function = useState
  const [message, setMessage] = useState("Usuario");
  //use state container of values and return var and func change value of var

  return (
    <div>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("the Message is : " + message);
        }}
      >
        Save
      </button>
      <h1>{message}</h1>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
