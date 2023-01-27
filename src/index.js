import React from "react";
import ReactDom from "react-dom/client";
//import { Greeting, UserCard } from "./Greeting";
//import Product, { Nanbar } from "./Product";
import {TaskCard} from "./Task"
//import { Button } from "./Button";
import { Hello } from "./Hello";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Hello/>
    <TaskCard ready={true}/>
  </>
);
