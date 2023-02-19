import { useNavigate } from "@solidjs/router";

import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

import Layout from "../components/Layout";
import createIsAuth from "../store/createAuth";

export default function AuthPage() {
  const navigate = useNavigate();

  const { onSetIsAuth, onInitIsAuth } = createIsAuth;

  const onClickGoogleLoginButton = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());

      const idToken = await result.user.getIdToken();

      await axios.post(`http://127.0.0.1:8080/user/google-auth`, {
        CredentialString: idToken,
      });

      onSetIsAuth();
      localStorage.setItem("auth", "true");
    } catch (err) {
      console.log(err);
      onInitIsAuth();
      localStorage.clear();
    }
  };

  const onClickLogoutButton = async () => {
    const currentAuth = getAuth();

    try {
      await signOut(currentAuth);

      navigate("/");
    } catch (err) {
      console.log(err);
      localStorage.clear();
    }

    onInitIsAuth();
  };

  return (
    <Layout>
      <div class="flex flex-col">
        <button onClick={onClickGoogleLoginButton}>Google Login</button>
        <button onClick={onClickLogoutButton}>Logout</button>
      </div>
    </Layout>
  );
}
