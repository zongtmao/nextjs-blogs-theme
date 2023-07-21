import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/global.scss";
import "antd/dist/antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>next - blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
