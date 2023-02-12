import axios from "axios";
import createIsAuth from "../store/createIsAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-config";

import Layout from "../components/Layout";

export default function AuthPage() {
  const { onSetAuth, onInitAuth } = createIsAuth;

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());

      const idToken = await result.user.getIdToken();

      const res = await axios.post(`http://127.0.0.1:8080/user/google-auth`, {
        CredentialString: idToken,
      });

      onSetAuth();
    } catch (err) {
      console.log(err);
      onInitAuth();
    }
  };

  return (
    <Layout>
      <div>
        <button onClick={signIn}>Google Login</button>
      </div>
    </Layout>
  );
}
