import React from "react";
import Home from "./Pages/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
