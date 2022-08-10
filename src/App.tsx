import React from "react";
import { Title } from "./App.styles";

function App() {
  const greeting: string = "Hello, Ricardo Gostoso, MARAVILHOSO!";
  return (
    <>
      <Title color="cyan">{greeting}</Title>
    </>
  );
}

export default App;
