import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Nanbar } from "./Product";

import { Button } from "./Button";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <UserCard
      name="Victor"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 main stret", city: "NY" }}
      greet={() => {
        alert("hello");
      }}
    /> */}
    <Button text="click me!"/>
    <Button text="Pay"/>
    <Button text="Hello" name={"Joe"}/>

  </>
);
