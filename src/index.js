import React, { useState, useEffect } from "react";
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
  const [counter, setCounter] = useState(0);
  //use state container of values and return var and a func change value of var

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => alert("the Message is : " + message)}>Save</button>
      <h1>{message}</h1>

      <hr />

      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
