import React from "react";
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

root.render(
  <>
    {usrs.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })}
  </>
);
