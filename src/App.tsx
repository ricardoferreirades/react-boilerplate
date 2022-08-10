import React from "react";
import { Title } from "./App.styles";

function App() {
  const greeting: string = "Hello, Ricardo Gostoso!";
  return (
    <>
      <Title>{greeting}</Title>
    </>
  );
}

export default App;
