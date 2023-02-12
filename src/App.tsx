import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import { createEffect } from "solid-js";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase-config";

const App: Component = () => {
  createEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.clear();
      }
    });
  });

  return (
    <Routes>
      <Route path="/" component={MainPage} />
      <Route path="/:id" component={MainPage} />
      <Route path="/auth" component={AuthPage} />
    </Routes>
  );
};

export default App;
