import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>M</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
