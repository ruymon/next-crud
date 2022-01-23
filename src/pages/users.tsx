import Head from "next/head";

import { Layout } from "../components/Layout";
import { UsersTable } from "../components/Users/UsersTable";

export default function Users() {
  return (
    <>
      <Head>
        <title>Users | Next CRUD</title>
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
        <Layout title='Gerenciamento de Usuários'>
          <UsersTable />
        </Layout>
      </div>
    </>
  );
}
