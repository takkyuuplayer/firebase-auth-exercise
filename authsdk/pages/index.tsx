import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import { loginWithGoogle, getAuth, logout } from "../lib/firebaseHelper";

export default function Home() {
  const [user, loading] = useAuthState(getAuth());
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {!loading && user ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => loginWithGoogle()}>Login</button>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
