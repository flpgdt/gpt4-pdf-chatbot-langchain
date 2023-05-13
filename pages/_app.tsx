import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Script from 'next/script';
import Router from 'next/router';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function CustomApp({ Component, pageProps, router }: AppProps) {

    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script id="gtag-inline-script" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            
            
            <Head>
                <title>falecom175.com.br</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}


export default CustomApp;