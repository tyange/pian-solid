import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Layout from "../components/Layout";
import { auth } from "../firebase-config";
import axios from "axios";

export default function AuthPage() {
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());

      const idToken = await result.user.getIdToken();

      const res = await axios.post(`http://127.0.0.1:8080/user/google-auth`, {
        CredentialString: idToken,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
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
