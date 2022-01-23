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
        justify-center
        items-center
        w-full
        h-screen
      `}
      >
        <Layout title='Gerenciamento de Usuários'>
          <h1 className='text-gray-700 text-2xl'>Next.js CRUD</h1>
          <h2 className='text-gray-500 text-md font-light'>
            Create, Read, Update, Delete
          </h2>
        </Layout>
      </div>
    </>
  );
}
