import React from "react";
import "./App.css";
import { Provider } from "@ayayalar/provider";
import { Consumer } from "@ayayalar/consumer";

function App() {
  return (
    <Provider>
      <Consumer />
    </Provider>
  );
}

export default App;
