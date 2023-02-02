import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import React from 'react';
import '../../src/styles/globals.css';
import RootLayout from '../components/layouts/RootLayout';
import ThemeContextWrapper from '../components/UI/ThemeContextWrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="relative min-h-screen bg-slate-200 text-gray-800  dark:text-white dark:bg-gray-700">
        <ThemeContextWrapper>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeContextWrapper>
      </div>
    </SessionProvider>
  );
}
