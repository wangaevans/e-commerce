import React from 'react';
import Head from 'next/head';
import Intro from '../components/UI/IntroPage';
import { getSession, useSession } from 'next-auth/react';
import Login from './auth/login';
import config from '../config';
import Products from './products';

export default function Home() {
  const { data: session } = useSession();
  if(!session)return <Login/>
    return (
      <div>
        <Head>
          <title>{config.app.title}</title>
          <meta name="description" content={config.app.description} />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href={config.app.favicon} />
        </Head>
        <main>
          <Products />
          <Intro />
        </main>
      </div>
    );
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
