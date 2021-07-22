import Link from "next/dist/client/link";
import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/layout";

const FirePost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};
export default FirePost;
