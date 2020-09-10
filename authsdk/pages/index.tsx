import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { loginWithGoogle, getAuth, logout } from "../lib/firebaseHelper";

export default function Home() {
  const [user, loading] = useAuthState(getAuth());
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {!loading && user ? (
        <>
          <button onClick={() => logout()}>Logout</button>
          <pre> You're logged in as: {JSON.stringify(user, null, "  ")} </pre>
        </>
      ) : (
        <button onClick={() => loginWithGoogle()}>Login with Google</button>
      )}
    </Layout>
  );
}
