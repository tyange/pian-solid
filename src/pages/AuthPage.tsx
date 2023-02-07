import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Layout from "../components/Layout";
import { auth } from "../firebase-config";

export default function AuthPage() {
  const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());

  return (
    <Layout>
      <div>
        <button onClick={signIn}>Google Login</button>
      </div>
    </Layout>
  );
}
