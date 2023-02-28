import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThreeComponent = dynamic(() => import('../components/Three'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Secret = () => {
  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>Secret Page</title>
      </Head>
   
      <ThreeComponent />

    
    </div>
  );
};

export default Secret;