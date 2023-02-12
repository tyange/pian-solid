import { createRoot, createSignal } from "solid-js";

const createIsAuth = () => {
  const [isAuth, setIsAuth] = createSignal(false);

  const onSetAuth = () => {
    setIsAuth(true);
  };

  const onInitAuth = () => {
    setIsAuth(false);
  };

  return {
    isAuth,
    onSetAuth,
    onInitAuth,
  };
};

export default createRoot(createIsAuth);
