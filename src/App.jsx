import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>Adopt Me !</h1>
      <SearchParams />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
