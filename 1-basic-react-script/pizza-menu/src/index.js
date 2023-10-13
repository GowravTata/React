import React from "react";
import ReactDOM from "react-dom/client";

// Creating a function App, always use uppercase
function App() {
  return <h1>Hello React</h1><p>JS</p>;
}

// ReactDOM consists of create root method
// Rendering the DOM Element in v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Method to check strict mode
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);
