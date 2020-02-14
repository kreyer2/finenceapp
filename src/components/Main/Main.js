import React from "react";
import Block from "./Block";

export default function Main ({data}) {
  return (
    <main className="main" id="main">
      {Object.keys(data.data).map((item, key) => {
        const elements = data.data[item];
        return <Block {...elements} amount={data.amount} key={key}/>
      })}
    </main>
  )
}