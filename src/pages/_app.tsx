import { AppProps } from 'next/app';

import { Sidebar } from '../components/Sidebar/Sidebar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <main className='w-full h-screen p-2'>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp
