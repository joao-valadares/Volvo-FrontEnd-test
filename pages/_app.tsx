import "../public/css/styles.css";
import React from "react";
import { Block, EstaPronto, Header, Hero, PQVolvo, TodosModelos } from "../src/components";

function HomePage() {
  return (
    <React.StrictMode>
      <Header />
      <Hero />
      <TodosModelos />
      <PQVolvo />
      <EstaPronto />
      <Block />
    </React.StrictMode>
  );
}

export default HomePage;
