import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
