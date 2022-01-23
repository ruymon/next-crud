import Head from "next/head";

import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Next CRUD</title>
      </Head>

      <div
        className={`
        flex
        flex-col
        items-center
        mt-2
        w-full
        h-screen
        py-2
      `}
      >
        <Layout title='Painel Principal'>
          <h1>Olá, seja bem vindo ao USR.BD!</h1>
        </Layout>
      </div>
    </>
  );
}
