import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import MainPage from "./pages/MainPage";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={MainPage} />
        <Route path="/:id" component={MainPage} />
      </Routes>
    </div>
  );
};

export default App;
