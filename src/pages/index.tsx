import Head from "next/head";

import { Layout } from "../components/Layout";
import { UsersTable } from "../components/Users/UsersTable";

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
      `}
      >
        <Layout title='Gerenciamento de Usuários'>
          <UsersTable />
        </Layout>
      </div>
    </>
  );
}
