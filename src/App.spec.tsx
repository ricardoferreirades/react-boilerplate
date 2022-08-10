import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import App from "./App";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

const Button = styled.button`
  color: green;
`;

describe("App Component", () => {
  let container: any = null;
  let root;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    act(() => {
      root.unmount(container);
    });
    container.remove();
    container = null;
  });

  it("works", () => {
    act(() => {
      root = createRoot(container);
      root.render(<App />);
    });
    expect(container.textContent).toBe("Hello, Ricardo Gostoso, MARAVILHOSO!");
  });

  it("works", () => {
    const tree = renderer.create(<Button>Foo</Button>);
    expect(tree).toMatchSnapshot();
  });
});
