import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={MainPage} />
      <Route path="/:id" component={MainPage} />
      <Route path="/auth" component={AuthPage} />
    </Routes>
  );
};

export default App;
