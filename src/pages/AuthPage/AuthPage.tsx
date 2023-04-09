import { useNavigate } from "@solidjs/router";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";

import Layout from "../../components/Layout/Layout";
import createIsAuth from "../../store/createAuth";

import * as styles from "../../components/Layout/Layout.css";
import * as authPageStyles from "./AuthPage.css";
import * as atomicStyles from "../../styles/styles.css";

export default function AuthPage() {
  const navigate = useNavigate();

  const { onSetIsAuth, onInitIsAuth } = createIsAuth;

  const onHandleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());

      onSetIsAuth();
      localStorage.setItem("userId", result.user.uid);
      localStorage.setItem("auth", "true");
    } catch (err) {
      console.log(err);
      onInitIsAuth();
      localStorage.clear();
      sessionStorage.clear();
    }
  };

  const onClickLogoutButton = async () => {
    const currentAuth = getAuth();

    try {
      await signOut(currentAuth);
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
      localStorage.clear();
      sessionStorage.clear();
    }

    onInitIsAuth();
  };

  return (
    <Layout>
      <div
        class={`${styles.mainContainer} ${atomicStyles.directionColumnCenter} ${authPageStyles.authContainer}`}
      >
        <button
          class={`outline contrast ${authPageStyles.authButton}`}
          onClick={onHandleGoogleLogin}
        >
          <i class="fa-brands fa-google"></i>
          <span>구글 로그인</span>
        </button>
      </div>
    </Layout>
  );
}
