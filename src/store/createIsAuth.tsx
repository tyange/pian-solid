import { createRoot, createSignal } from "solid-js";

const createIsAuth = () => {
  const [isAuth, setIsAuth] = createSignal(false);

  const onSetIsAuth = () => {
    setIsAuth(true);
  };

  const onInitIsAuth = () => {
    setIsAuth(false);
  };

  return {
    isAuth,
    onSetIsAuth,
    onInitIsAuth,
  };
};

export default createRoot(createIsAuth);
